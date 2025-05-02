
variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment (dev, staging, production)"
  type        = string
  default     = "dev"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "diario-sre"
}
