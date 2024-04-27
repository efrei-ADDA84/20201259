# Weather API Wrapper

A Node.js application to fetch weather data using OpenWeather API, containerized with Docker, and deployed to Azure Container Instances (ACI) through Azure Container Registry (ACR) using GitHub Actions.

## Features

- Code hosted on GitHub.
- Continuous Integration and Deployment using GitHub Actions.
- Docker containerization and deployment to Azure Container Registry (ACR).
- Service deployment to Azure Container Instance (ACI).

## Architecture

1. **GitHub Repository** - Stores all the source code along with Docker configurations.
2. **GitHub Actions** - Handles the automation for linting, building Docker images, pushing to ACR, and deploying to ACI.
3. **Azure Container Registry (ACR)** - Hosts the Docker images.
4. **Azure Container Instance (ACI)** - Runs the Docker container in a managed serverless environment.

## Prerequisites

- Azure subscription
- GitHub account
- Configured Azure service principal with appropriate permissions
- OpenWeatherMap API key set as an environment variable

## Environment Variables

Ensure these are set in your CI/CD pipeline:

- `AZURE_CREDENTIALS` - Azure service principal credentials
- `REGISTRY_LOGIN_SERVER` - Azure Container Registry URL
- `REGISTRY_USERNAME` - ACR username
- `REGISTRY_PASSWORD` - ACR password
- `RESOURCE_GROUP` - Azure resource group name
- `OPENWEATHER_API_KEY` - API key for OpenWeatherMap

## Usage

The service can be accessed via a web browser or tools like `curl`. For example, to query weather data you would use:
    
```bash
curl "http://devops-20201259.francesouth.azurecontainer.io:3000/?lat=5.902785&lon=102.754175"
```
