# webpack-library-template

## Scripts

* `npm run build` - produces production version of your library under the `dist` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - runs the tests :)
* `npm run test:watch` - same as above but in a watch mode

## Publish

* `npm login` - log into your npm account
* `npm publish` - publish to npm using your account and meta data in package.json

## Development mode
If you would like the development build to publish the output to a local project you can adjust to:

"dev": "webpack --mode development --output-path ./path-to-project/node_modules/webpack-library-template/dist/ --watch",

Example of consuming a library from outside Node:

https://jsfiddle.net/mikemenaker/84aryz45/


