## Get started
After you clone the project, run in the project directory `npm install` and then `npm start`.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## About the app
This app uses the API provided by Github Gist API, to create a basic single-page application in React. 
The goal of this application is to allow its users to enter a username and get the full list of public Gists for that user.

### Functionalities
- Search: When a user enters a username, an accordion with the urls of all public Gists by that user will be loaded.
- Filetypes: In the header of each accordion, you will be able to see tags based on the file types present in each gist.
The color of each tag is computed based on the file type.
- Forks: In the header you will also see the avatar of the last 3 users who have forked each gist.
- Gist contents: When you expand one gist to see the files and click on one of them, the content of that file will be loaded.

### Packages used:
- mui - for icons and accordion
- react-avatar - for the avatar functionality
- react-loading - for loading icon
- react-syntax-highlighter - for file content display