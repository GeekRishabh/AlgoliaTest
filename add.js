var algoliasearch = require("algoliasearch");
var client = algoliasearch("9VVH50M2EX", "2a77145b34570b9df1c0620a6dc8e448");
var index = client.initIndex("testing");

var objects = [
  {
    firstname: "Jimmie",
    lastname: "Barninger"
  },
  {
    firstname: "Warren",
    lastname: "Speach"
  }
];

index.addObjects(objects, function(err, content) {
  console.log(content, err);
});
