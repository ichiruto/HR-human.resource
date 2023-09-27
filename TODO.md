# DEMO - Project Full Stack

- [ ] Project passes eslint
- [ ] The project builds and can start
- [ ] All endpoints can be requested from postman/insomnia/swagger
- [ ] Data is stored in mysql database successfully and kafka messager working
- [ ] Application is covered with unit/functional tests

## Description

This is a simple [Nest](https://github.com/nestjs/nest) REST application from scratch.

## Technologies Used

- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [MySql]()
- [Kafka]()
- [Angular]()

## Requirements

- [NVM](https://github.com/nvm-sh/nvm) (optional, this project uses node 18.15.0 version)
- Installed Docker
- Installed Node.js(npm)

## Installation

1. Select the node version of the project: `nvm use`
2. Install the dependencies: `npm run npm-i`
3. If you choose to use docker to run the whole project, just use the script: `npm run services:up`
4. If not, just configure the env file as follows the env.development template and run `npm run start:dev`

## Usage

1. The backend server will be available at: `http://localhost:3000` for development

## API Resources

You can use an http client to send requests to this application, such as _Insomnia_, _Postman_

Also, you can access swagger in `http://localhost:3000/api` after run the project

## Endpoints

1. GET /api/user

## Testing

1. Run the automated tests: `npm run test`
