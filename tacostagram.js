function getPostsFromAPI() {
  // Replace this with the URL of the JSON API that returns an array of image URLs
  const url = 'https://3000-andwillner-tacogramfina-857b85a5yg3.ws-us118.gitpod.io/posts.json';
  if (url == 'anything') {
    alert('Error: Replace url value in tacostagram.js')
  }

  // Make a GET request to the API
  fetch(url)
    .then(response => response.json()) // Parse the response as JSON
    .then(posts => {
      // Loop through the array of posts and build html for each
      for (let post of posts) {
        // Log post data to browser console
        console.log(post);

        // html for each post goes here
        let html = `<div class="col-sm-6 col-md-3">
            <img src="${post["image"]}" class="img-fluid">
            <p>${post["body"]}</p>
          </div>
        `;

        const postsDiv = document.querySelector('#posts');
        postsDiv.innerHTML += html
      };
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

const getPostsButton = document.querySelector('#get-posts-button');
getPostsButton.addEventListener('click', getPostsFromAPI);
