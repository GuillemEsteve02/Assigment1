
const divd = document.getElementById("content");


pageNumber = 0;
async function fetchPosts(event) {
  limit = 15;
  console.log(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${limit}`)
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${limit}`)
    .then(response => response.json())
    .then(data => {
      let i = 1;
      data.forEach(post => {
        if (i <= limit) {
          console.log(data);
          let postElement = document.createElement('div');
          postElement.className = 'post';
          postElement.innerHTML = `
            <h2>${post.title}</h2>
            <br>
            <p>${post.body}</p>
          `;
          divd.appendChild(postElement);
        }
        i++;

      });
      pageNumber++;

    })
    .catch(error => {
      console.error('Error:', error);
    });

}


fetchPosts();


window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
    fetchPosts(); 
  }
});

