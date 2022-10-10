const axios = require('axios');

axios.get('https://dummyjson.com/posts/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


  async function getPost() {
    try {
      const response = await axios.get('https://dummyjson.com/posts/1');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
getPost();