var algoliasearch = require("algoliasearch");
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
