export const config = {
  "dev": {
    "username": "postgres",
    "password": "udagramadnandev",
    "database": "udagramadnandev",
    "host": "udagramadnandev.cpxkwux5kjlj.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-dev-s3"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
