# Evironment Instructions

1. Make sure dependencies are installed

   - Version control with Git
     - Go to [Git's Website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install the version needed for your OS.
     - To be sure you have it installed, run `git -version`
   - Node
     - go to [Node's Website](https://nodejs.org/en/) to download the newest version of Node. This will also install `npm` on your machine.
     - run this command to install a [Node management tool](https://www.npmjs.com/package/n) that will allow to update the version of Node your machine has.
     ```txt
     npm install -g n
     ```
     - You can check to see what version of Node is on your machine by running the below commands. The `n` package will allow you to update node versions, or use a previously cahced version of node.
     ```txt
     node -v
     ```
   - In VS Code, you can setup the `code .` command.
     - Open VS Code
     - Run `CMD + SHIFT + P` (or equivalent)
     - In the search bar that appears, type `code`
     - click on `Shell Command: Install 'code' Command in PATH`
     - This will allow you to cd into a directory, and simply type `code .` or `code <project_direcotry_path>` to automatically open that project in VS Code.

2. This project is bootstrapped using the easy-setup method created by React, called `create-react-app`.

   - To learn more, visit the [documentation](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

3. Once you fork and clone this project, run `npm install` or `npm i` to install the needed node_modules.

4. Now you're ready to start diving in! If you are looking to eventually further your skills, look at using the below resources:
   - https://www.twilio.com/blog/react-app-with-node-js-server-proxy
   - https://www.npmjs.com/package/axios
   - https://www.npmjs.com/package/nodemon
   - https://www.npmjs.com/package/react-router-dom
   - https://www.npmjs.com/package/redux
   - https://www.npmjs.com/package/react-toastify
