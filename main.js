window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

function apiRequest() {
  var userInput = document.getElementById('search-input').value;
  console.log(userInput);
  var apiKey = "iurA6At0M8o4XU1nZoHvkjxHuAsk1sGu"
  var url = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=' + userInput + '&limit=25&offset=0&rating=g&lang=en';

  fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (json) {
    document.querySelector('.search-results').innerHTML = ""
    for (let i = 0; i < json.data.length; i++) {
      var imgPath = json.data[i].images.fixed_height.url;
      var img = document.createElement("img");
      img.setAttribute("src", imgPath);
      document.querySelector('.search-results').appendChild(img);
    }
  });
}
  document.getElementById('search-button').addEventListener('click', () => {
    console.log('the search button was clicked!')
    apiRequest()

  })
});