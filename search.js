var algoliasearch = require("algoliasearch");
var client = algoliasearch("9VVH50M2EX", "2a77145b34570b9df1c0620a6dc8e448");
var index = client.initIndex("testing");

// index.search(
//   {
//     query: "Jimmie"
//   },
//   function searchDone(err, content) {
//     if (err) throw err;
//     console.log(content);
//   }
// );

index.search(
  {
    query: "Ji",
    attributesToRetrieve: ["firstname", "lastname"],
    hitsPerPage: 50
  },
  function searchDone(err, content) {
    if (err) throw err;

    console.log(content.hits);
  }
);
