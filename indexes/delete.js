var algoliasearch = require("algoliasearch");
var client = algoliasearch("9VVH50M2EX", "2a77145b34570b9df1c0620a6dc8e448");

client.deleteIndex("cities", function(err, content) {
  if (err) throw err;

  console.log("success");
});
