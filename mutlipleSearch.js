var algoliasearch = require("algoliasearch");
var client = algoliasearch("9VVH50M2EX", "2a77145b34570b9df1c0620a6dc8e448");

var queries = [
  {
    indexName: "testing",
    query: "J",
    params: {
      hitsPerPage: 3
    }
  },
  {
    indexName: "cities",
    query: "",
    params: {
      hitsPerPage: 3
    }
  },
  {
    indexName: "testing",
    query: "w"
  }
];
client.search(queries, function searchCallback(err, content) {
  if (err) throw err;

  console.log(content.results);
});
