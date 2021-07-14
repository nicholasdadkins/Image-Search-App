const apiKey = 'iurA6At0M8o4XU1nZoHvkjxHuAsk1sGu'

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');


  let fetchResults = (searchQuery) => {
    // write code here to perform a fetch call the the GIPHY API
    // once the fetch returns some data, pass the data to the displayResults()

    // displayResults(response)
  }

  let displayResults = (response) => {
    // Write code to loop over the results and show the results on the page
    // this will also involve being able to console log out the results and figuring out the result structure. Just like the Youtube API
  }

  document.getElementById('search-button').addEventListener('click', () => {
    console.log('the search button was clicked!')
    let searchQuery = document.getElementById('search-input').value
    console.log('the value of the searchQuery is', searchQuery)

    fetchResults(searchQuery)

  })


});