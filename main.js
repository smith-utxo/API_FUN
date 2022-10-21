const users = document.getElementById("userList");
const postBody = document.getElementById("postList");
const header = document.createElement("h1");

const api_names = "https://jsonplaceholder.typicode.com/users/";
const api_posts = "https://jsonplaceholder.typicode.com/posts/";

let usernames = [];
let userposts = [];

async function getNames() {
  const response = await fetch(api_names);
  const data = await response.json();
  console.log(data);
  data.map((obj) => {
    usernames.push(obj.username);
  });
  console.log(usernames);

  function createTable() {
    // create a counter for ID to change
    let counter = 1;
    usernames.forEach((e) => {
      const newPara = document.createElement("tr");
      newPara.setAttribute("id", counter);
      newPara.innerHTML = e;
      users.appendChild(newPara);
      counter++;
    });
  }
  createTable();
}

async function getPosts() {
  const response = await fetch(api_posts);
  const data = await response.json();
  console.log(data);
  data.map((obj) => {
    userposts.push(obj.title);
  });
  console.log(userposts);
}

const createPosts = (id) => {
  switch (id) {
    case "1":
      header.innerHTML = "Bret's Posts:";
      postBody.appendChild(header);
      const bretPosts = userposts.slice(0, 9);
      bretPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "2":
      header.innerHTML = "Antonette's Posts:";
      postBody.appendChild(header);
      const antPosts = userposts.slice(10, 19);
      antPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "3":
      header.innerHTML = "Samantha's Posts:";
      postBody.appendChild(header);
      const samPosts = userposts.slice(20, 29);
      samPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "4":
      header.innerHTML = "Karianne's Posts:";
      postBody.appendChild(header);
      const karPosts = userposts.slice(30, 39);
      karPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "5":
      header.innerHTML = "Kamren's Posts:";
      postBody.appendChild(header);
      const kamPosts = userposts.slice(40, 49);
      kamPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "6":
      header.innerHTML = "Leopoldo's Posts:";
      postBody.appendChild(header);
      const leoPosts = userposts.slice(50, 59);
      leoPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "7":
      header.innerHTML = "Elwyn's Posts:";
      postBody.appendChild(header);
      const elwynPosts = userposts.slice(60, 69);
      elwynPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "8":
      header.innerHTML = "Maxime's Posts:";
      postBody.appendChild(header);
      const maxPosts = userposts.slice(70, 79);
      maxPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "9":
      header.innerHTML = "Delphine's Posts:";
      postBody.appendChild(header);
      const delPosts = userposts.slice(80, 89);
      delPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;

    case "10":
      header.innerHTML = "Moriah's Posts:";
      postBody.appendChild(header);
      const morPosts = userposts.slice(90, 99);
      morPosts.forEach((e) => {
        const postList = document.createElement("li");
        postList.innerHTML = e;
        postBody.appendChild(postList);
      });
      break;
  }
};

getNames();
getPosts();

users.addEventListener("click", (e) => {
  if (e.target.tagName === "TR") {
    postList.innerHTML = "";
    createPosts(e.target.id);
  }
});
