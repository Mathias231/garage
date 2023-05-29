This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repo

```bash
git clone https://github.com/Mathias231/garage.git
```

Once installed, locate the "garage" folder and open folder with Visual Studio Code

For terminal users, navigate yourself to folder "garage"
```
Desktop\garage> cd garage
```
To open the folder in Vscode, write
```
Desktop\garage> code .
```
Once inside Visual Studio Code, run the following command in your terminal
```
npm i
```
This will install all the required packages defined inside package.json file that is needed for this project/website.

This project also has a few envirement ID's, so you need to create a .env file the root of this project and paste in the following content.
The .env file contains the following variables:
```
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```
To get the ID and SECRET ID's you can read more about them here:
- [GitHub ID and Secret](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app)
- [Google ID and Secret](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)

For ```MongoDB_URI``` you'll need to create a cluster. Recommend to have abit of knowledge with MongoDB before starting.
- [MongoDB](https://www.mongodb.com/)

Once all the .env variables are filled, run the website
```
npm run dev
```
