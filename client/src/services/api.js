import axios from "axios";

const fetchImdbData = async (title) => {
  const imdbResults = await axios({
    method: "GET",
    url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}`,
  }).then((res) => {
    return res.data.Search;
  });
  return imdbResults;
};

// Using this for any component that needs netflix data to be put into an array
// The redux action updates global state for a single title
const fetchNetflixData = async (imdbID) => {
  const netflixResult = await axios
    .get(
      `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=${imdbID}`,
      {
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_UNOGS_API_KEY}`,
          "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
        },
      }
    )
    .then((res) => {
      if (res.data.RESULT) {
        return res.data.RESULT.nfinfo;
      } else {
        return;
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return netflixResult;
};

const getData = async (arr) => {
  return Promise.all(arr.map((item) => {
    return api.fetchNetflixData(item.imdbID)
  }));
};

export const api = {
  fetchImdbData,
  fetchNetflixData,
  getData
};