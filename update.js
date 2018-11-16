var algoliasearch = require("algoliasearch");
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// import * as algoliasearch from 'algoliasearch'; // When using TypeScript

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch("9VVH50M2EX", "2a77145b34570b9df1c0620a6dc8e448");
var index = client.initIndex("testing");

var objects = [
  {
    firstname: "Jimmie",
    lastname: "Barninger test",
    objectID: "20825462"
  },
  {
    firstname: "Warren",
    lastname: "Speach",
    objectID: "20825472"
  }
];

index.saveObjects(objects, function(err, content) {
  if (err) throw err;

  console.log(content);
});
