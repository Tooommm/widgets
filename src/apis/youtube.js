import axios from 'axios';

const KEY = 'AIzaSyDzbh_nI0EATAP6MrcGU-Fkm-xJEmA27ag';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
