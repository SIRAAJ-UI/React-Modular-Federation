React JS With Modular Federation App
This repository contains two applications: a host application and a remote application, both utilizing Webpack 5 Module Federation for building a modular architecture.
Setup
1.	Clone the repository:
git clone https://github.com/SIRAAJ-UI/React-Modular-Federation.git
2.	Navigate to the host application directory:
cd hostApp
3.	Install dependencies:

npm install
4.	Navigate to the remote application directory:
cd ../remoteApp
5.	Install dependencies:
bash

npm install
Running the Applications
1.	Open two terminal windows, one for the hostApp and another for the remoteApp.
2.	Start both applications by running:
npm start
3.	The host application will be running at http://localhost:3001 and the remote application at http://localhost:3000.
Unit Test Coverage
We have included unit tests for one component and one store object in the applications.
Directory Structure
•	hostApp/: Host application source code.
•	remoteApp/: Remote application source code.
•	package.json: Project metadata and dependencies.

