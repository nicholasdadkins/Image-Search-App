window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

function apiRequest() {
  let userInput = document.getElementById('search-input').value;
  console.log(userInput);
  let apiKey = "iurA6At0M8o4XU1nZoHvkjxHuAsk1sGu"
  let url = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=' + userInput + '&limit=25&offset=0&rating=g&lang=en';

  let myFunc = async () => {
    let res = await fetch(url)
    let json = await res.json()

    
    console.log('the data from async await is', json)

    document.getElementById('search-results').innerHTML = ""
    for (let i = 0; i < json.data.length; i++) {
      let imgPath = json.data[i].images.fixed_height.url;
      let img = document.createElement("img");
      img.setAttribute("src", imgPath);
      document.getElementById('search-results').appendChild(img);
  }   
  }
  myFunc();
}
  document.getElementById('search-button').addEventListener('click', () => {
    console.log('the search button was clicked')
    apiRequest()

  })
});