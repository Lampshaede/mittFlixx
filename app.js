let APIKey = ""; // Insert your API Key here
const defaultURL = "http://www.omdbapi.com/?s=";
const getMovies = async(searchTerm) => {
  const response = await fetch(`${defaultURL}${searchTerm}&apikey=${APIKey}`);
  console.log(response);
  const data = await response.json();
  if(response.status !== 200) {
    throw new Error(`Status ${response.status}`);
  }
  return data;
}
getMovies('Star+Wars')
  .then((data) => {
    const searchResults = new SearchResults(data.Search);
    searchResults.render();
  })
  .catch((err) => console.log(`failed: `, err.message));
// x.Search[0].Poster
  class SearchResults{
    constructor(arrayResults){
      this.results = arrayResults;
    }
    render(){
      const resultsList = document.querySelector(".movies");
      const resultsArray = document.querySelectorAll(".card"); 
      for(let movie of resultsArray){
        movie.remove();
      }
      for(let movie of this.results){
        resultsList.insertAdjacentHTML('beforeend', `<img src="${movie.Poster}" class="card" alt="${movie.Title} poster">`)
      }
    }
  }