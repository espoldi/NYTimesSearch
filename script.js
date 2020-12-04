var apiKEY = "tTqVF08iHcdtycoBQ5PvpXVTNGMxMPJH";
var search = "Biden";

var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKEY}`;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});