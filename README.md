# mongodb-now
POC to use mongodb (mlab) and now to deploy


## Pre-requisites
- Must have Mlab account [https://mlab.com/home](https://mlab.com/home)
- Add a `.env` file at the project root directory declaring `USER_DB=<your user name>` & `USER_PW=<your password>`


## Run it
`npm start` to start the app
Project runs on port `3000` if `PORT` is not declared (e.g. `process.env.PORT` or passing `PORT` explicitly in the `start` task.)
Deployed with now


## now pkg

Want to share an url when your project is ready to be deployed:
- When your project is deployed, use `now alias <now-commit-url-deployed>/ <your-alias>`
- Keep your <now-commit-url-deployed> as your hash commit (staging)