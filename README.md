
# Module Federation with Webpack 5 in React

This repo uses Webpack5 Module Federation plugin to build a React microfrontend

# Get started

    1.Clone the repository: git clone https://github.com/SIRAAJ-UI/React-Modular-Federation.git
    2.Navigate to the host application directory: cd hostApp
    3.Install dependencies by using commannd in terminal

    # Terminal 1
    cd React-Modular-Federation/remote-App
    npm i
    npm start

Then go to http://localhost:3001

    # Terminal 2
    cd React-Modular-Federation/host-App
    npm i
    npm start

Then go to http://localhost:3001


# How it works
Host is the shell app which imports Remote1. Host is hosted on port 3001.

Remote is hosted port 3001 and exposes 4 components follows below.

    exposes: {
        "./ConfirmationDetailsForm": "./src/components/ConfirmationDetailsForm.tsx",
        "./CompanyDetailsForm": "./src/components/CompanyDetailsForm",
        "./SuccessDialog": "./src/components/SuccessDialog.tsx",
        "./UserDetailsForm": "./src/components/UserDetailsForm.tsx",
      },

The exposed components are used in Host.

# Unit Test coverage
    I have covered 1 component and one state management.
    npm test
    
# Test Coverage
    cd remoteApp\coverage
    index.html to view the code coverage report
# Library
    1.In this application used Material UI Lirary (@mui/material)
    2.React-hook-form 
    3.zustand (State management)
    4.react-form-stepper
    5.Typescript

# Packages - remoteApp

    {
    "name": "remote-App",
    "version": "1.0.0",
    "scripts": {
        "build": "webpack --mode production",
        "build:dev": "webpack --mode development",
        "build:start": "cd dist && PORT=3000 npx serve",
        "start": "webpack serve --open --mode development",
        "start:live": "webpack serve --open --mode development --live-reload --hot",
        "test": "jest --coverage"
    },
    "devDependencies": {
        "@babel/core": "^7.15.8",
        "@babel/plugin-transform-runtime": "^7.15.8",
        "@babel/preset-env": "^7.15.8",
        "@babel/preset-react": "^7.14.5",
        "@babel/preset-typescript": "^7.10.4",
        "@emotion/react": "^11.11.4",
        "@emotion/styled": "^11.11.5",
        "@hookform/devtools": "^4.3.1",
        "@mui/icons-material": "^5.15.20",
        "@mui/material": "^5.15.20",
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/node": "^16.18.101",
        "@types/react": "^18.3.3",
        "@types/react-dom": "^18.3.0",
        "autoprefixer": "^10.1.0",
        "babel-loader": "^8.2.2",
        "css-loader": "^6.3.0",
        "dotenv-webpack": "^8.0.1",
        "html-webpack-plugin": "^5.6.0",
        "postcss": "^8.2.1",
        "postcss-loader": "^4.1.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-form-stepper": "^2.0.3",
        "react-hook-form": "^7.52.0",
        "react-scripts": "5.0.1",
        "react-transition-group": "^4.4.5",
        "style-loader": "^3.3.0",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4",
        "webpack": "^5.92.1",
        "webpack-cli": "^5.1.4",
        "webpack-dev-server": "^5.0.4",
        "zustand": "^4.5.2"
    },
    "eslintConfig": {
        "extends": [
        "react-app",
        "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
        ],
        "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
        ]
    },
    "dependencies": {
        "@hookform/devtools": "^4.3.1",
        "@types/jest": "^29.5.12",
        "@types/react-transition-group": "^4.4.10",
        "axios": "^1.7.2",
        "jest": "^29.7.0",
        "jest-environment-jsdom": "^29.7.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "ts-jest": "^29.1.5",
        "zustand": "^4.5.2"
    }
}


# Packages - hostApp
    {
    "name": "hostApp",
    "version": "1.0.0",
    "scripts": {
        "build": "webpack --mode production",
        "build:dev": "webpack --mode development",
        "build:start": "cd dist && PORT=3001 npx serve",
        "start": "webpack serve --open --mode development",
        "start:live": "webpack serve --open --mode development --live-reload --hot"
    },
    
    "devDependencies": {
        "@babel/core": "^7.15.8",
        "@babel/plugin-transform-runtime": "^7.15.8",
        "@babel/preset-env": "^7.15.8",
        "@babel/preset-react": "^7.14.5",
        "@babel/preset-typescript": "^7.10.4",
        "@types/react": "^18.2.0",
        "@types/react-dom": "^18.2.0",
        "autoprefixer": "^10.1.0",
        "babel-loader": "^8.2.2",
        "css-loader": "^6.3.0",
        "dotenv-webpack": "^8.0.1",
        "html-webpack-plugin": "^5.3.2",
        "postcss": "^8.2.1",
        "postcss-loader": "^4.1.0",
        "style-loader": "^3.3.0",
        "typescript": "^4.5.2",
        "webpack": "^5.57.1",
        "webpack-cli": "^4.10.0",
        "webpack-dev-server": "^4.3.1"
    },
    "dependencies": {
        "@emotion/react": "^11.11.4",
        "@emotion/styled": "^11.11.5",
        "@mui/icons-material": "^5.15.20",
        "@mui/material": "^5.15.20",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-form-stepper": "^2.0.3"
    }
    }
   
