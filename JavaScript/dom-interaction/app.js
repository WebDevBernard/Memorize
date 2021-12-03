const getButton = document.getElementById("get");
const postButton = document.getElementById("post");

getButton
  .addEventListener("click", () => {
    fetch("http://localhost:8080/feed/posts");
  })
  .then((res) => res.json())
  .then((resData) => console.log(resData))
  .catch((err) => console.log(err));

postButton
  .addEventListener("click", () => {
    fetch("http://localhost:8080/feed/posts", {
      method: "POST",
      body: JSON.stringify({ title: "Some Content" }),
    });
  })
  .then((res) => res.json())
  .then((resData) => console.log(resData))
  .catch((err) => console.log(err));
