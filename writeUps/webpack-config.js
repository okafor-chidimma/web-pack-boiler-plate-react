/*
  dist folder ==> where the output will be served from

  PS remember to add dist/ to gitignore since every content inside it is automatically generated once you run npm run build in the terminal
  
  webpack ==> bundler, bundles our src code that is in the src folder into one file(bundle.js) in the dist folder

  webpack-dev-server ==> serve your project in a local environment with a local web server for development purposes

  webpack-cli ==> to be able to run web pack commands in the CLI

  WEBPACK WITH BABEL
    install these as dev-dependencies
      @babel/core ==> the main babel
      @babel/preset-env ==> to transpile es6 to vanilla js
      babel-loader ==> tells webpack to use babel as the transpiler when bundling

  WEBPACK WITH REACT
    install these as dev-dependencies
      @babel/preset-react ==> to transpile the react jsx syntax to vanilla js
      react-hot-loader ==> Hot module replacement for development alone i.e Basically whenever you change something in your source code, the change will apply in your app running in the browser without reloading the entire page. 

  WEBPACK WITH ESLINT AND PRETTIER
    install these as dev-dependencies
      prettier,eslint
      eslint-loader ==>  to tell Webpack that you want to use eslint in your build process. 
      babel-eslint ==> to let ESLint know about Babel enabled JavaScript features
      eslint-config-prettier ==> turns off all ESLint rules that could conflict with Prettier,
      eslint-plugin-prettier ==> integrates the Prettier rules into ESLint rules.

    install airbnb rules as a dependency
      npx install-peerdeps --dev eslint-config-airbnb


  WEBPACK FOR PRODUCTION
    add build script to package.json
      run npm run build
    to check locally whether the dist/ folder has everything you need to run your application on a remote web server, install a local web server to try it out yourself 
      run npm install -g http-server

      run http-server dist

    Every time you run npm run build, you will see Webpack creating a new version of your bundle JavaScript source code with a dist/bundle.js file. Eventually your Webpack build pipeline will become more complex and you end up with more than two files in your dist/ folder. Suddenly the folder becomes a mess, because you don't know which files belong to the most recent build. 
    
    The best thing would be to start with an empty dist/ folder with every Webpack build.

    Let's say we wanted to wipe our dist/ folder with every Webpack build. It would mean that our auto generated dist/bundle.js file would be removed (good), but also our dist/index.html file which we implemented manually (bad). We don't want to re-create this file by hand for every Webpack build again. In order to auto generate the dist/index.html file as well, we can use a Webpack plugin. First, install the html-webpack-plugin plugin as dev dependency from your project's root directory:

      npm install --save-dev html-webpack-plugin

    html-webpack-plugin ==> generates a html template for us any time we want

      npm install --save-dev clean-webpack-plugin

    clean-webpack-plugin clears out the content of the dist/ for every build before the auto generated one comes
*/