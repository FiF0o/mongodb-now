# mongodb-now
POC to use mongodb (mlab) and now to deploy


## Pre-requisites
- Must have Mlab account [https://mlab.com/home](https://mlab.com/home)
- Add a `.env` file at the project root directory declaring `USER_DB=<your user name>` & `USER_PW=<your password>`


## Run it
`npm start` to start the app
Project runs on port `3000` if `PORT` is not declared (e.g. `process.env.PORT` or passing `PORT` explicitly in the `start` task.)
Deployed with now


## now pkg - Zeit.co

Want to share an url when your project is ready to be deployed:
- When your project is deployed, use `now alias <now-commit-url-deployed> <your-alias>`
- Keep your <now-commit-url-deployed> as your hash commit (staging)

Want to set up environment/config variables when running your scrips?
- `now -e KEY=VALUE` to pass `KEY` as a variable when running your script
- `now secret add <KEY> <YOUR SECRET VALUE>` to add a private config var and then in your npm `script`, add the reference to it `now -e KEY=@<KEY>`

Debugging code when deploying to view source code
- `now -p` if you are using a private project
- append `_src` at the end of the deployed url, e.g. `<your-deployed-url>_src`
- you can then share the new url when highlighting code when debugging

DNS
- Go to [https://zeit.co/world](https://zeit.co/world) to get the IP DNS of Zeit.co to map to your provider nameservers DNS when you create your own nameservers with your provider
- Once your <domain name(s)> are confirmed by your provider you can `alias` it, e.g. `now alias <now-commit-url-deployed> <domain name(s)>`

Deploying with mongodb
- Don't forget to pass in your `USER_DB` and `USER_PW` encrypting them `@user_db`, `@user_pw` with now when deploying