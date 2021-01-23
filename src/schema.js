const url = process.env.REACT_APP_THE_MOVIE_API_ENDPOINT;

export const SEARCH_MOVIE = "SEARCH_MOVIE";

const encodeURLQuery = (query) => {
  return Object.keys(query)
    .map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(query[k]);
    })
    .join("&");
};

export const schema = {
  [SEARCH_MOVIE]: ({ query = {} }) => {
    return {
      readProps: "movieList",
      url: url + "/?" + encodeURLQuery(query),
      method: "GET",
    };
  },
};
