
#!/bin/bash

# Usage:
# ./k6-run.sh [environment]
# Example:
# ./k6-run.sh staging

# Set default environment if not provided
ENV=${1:-"staging"}

# Set base URL according to environment
case "$ENV" in
  "local")
    BASE_URL="http://localhost:8080"
    ;;
  "staging")
    BASE_URL="https://staging.diario-sre.example.com"
    ;;
  "production")
    BASE_URL="https://diario-sre.example.com"
    ;;
  *)
    echo "Unknown environment: $ENV"
    exit 1
    ;;
esac

echo "Running k6 tests against $BASE_URL"

# Make script executable
chmod +x ./tests/load/k6-run.sh

# Run k6 with the specified base URL
docker run --rm -v $(pwd)/tests/load:/tests \
  -e BASE_URL=$BASE_URL \
  grafana/k6:latest run /tests/homepage-test.js
