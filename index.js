var algoliasearch = require("algoliasearch");
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// import * as algoliasearch from 'algoliasearch'; // When using TypeScript

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch("9VVH50M2EX", "2a77145b34570b9df1c0620a6dc8e448");
var index = client.initIndex("cities");

// index.addObject(
//   {
//     objectID: "myId",
//     firstname: "Jimmie",
//     lastname: "Barninger"
//   },
//   function(err, content) {
//     console.log("objectID=", err, content);
//   }
// );
index.search(
  {
    query: "query string"
  },
  function searchDone(err, content) {
    if (err) {
      console.log(err, "err");
    }

    console.log(content);
  }
);
