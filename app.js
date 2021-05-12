// my API KEY IS 458c2882
const APIKey = "458c2882";
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
  .then((data) => console.log(`Resolved`, data))
  .catch((err) => console.log(`failed: `, err.message));