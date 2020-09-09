import axios from 'axios';

export function getRepos(query) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/search/repositories`, {
      params: {
        q: query,
      },
    })
    .then((result) => result.data);
}
