
provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "~> 3.0"
  
  name = "${var.project_name}-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = ["${var.aws_region}a", "${var.aws_region}b", "${var.aws_region}c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  
  enable_nat_gateway = true
  single_nat_gateway = var.environment != "production"
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
    Terraform   = "true"
  }
}

module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "~> 18.0"
  
  cluster_name    = "${var.project_name}-${var.environment}"
  cluster_version = "1.24"
  
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
  
  eks_managed_node_groups = {
    main = {
      min_size     = var.environment == "production" ? 2 : 1
      max_size     = var.environment == "production" ? 10 : 3
      desired_size = var.environment == "production" ? 3 : 1
      
      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"
    }
  }
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
    Terraform   = "true"
  }
}

resource "aws_s3_bucket" "website_assets" {
  bucket = "${var.project_name}-assets-${var.environment}"
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket = aws_s3_bucket.website_assets.id
  
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_cloudfront_distribution" "website_cdn" {
  origin {
    domain_name = aws_s3_bucket.website_assets.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.website_assets.bucket}"
    
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }
  
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.website_assets.bucket}"
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
  
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  viewer_certificate {
    cloudfront_default_certificate = true
  }
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for ${var.project_name} website"
}
