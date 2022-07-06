(function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      const postsData = document.querySelector(".posts .data");
      postsData.innerHTML = "<ul></ul>";
      json.forEach(({ title, id }) => {
        const li = document.createElement("li");
        li.id = `post_${id}`;
        li.innerText = title;
        li.addEventListener("click", () => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((json) => {
              const commentsData = document.querySelector(".comments .data");
              commentsData.innerHTML = "<ul></ul>";
              json.forEach(({ id, body, email, name }) => {
                const li = document.createElement("li");
                li.id = `comment_${id}`;
                li.innerText = `Name: ${name}\nEmail: ${email}\nBody: ${body}\n`;

                console.log(json);
                commentsData.querySelector("ul").appendChild(li);
              });
            });
        });
        postsData.querySelector("ul").appendChild(li);
      });
    });
})();
