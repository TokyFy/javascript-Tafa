const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const postId = urlParams.get("postId");

const postTemplate = document.querySelector("#template .post");
const commentTemplate = document.querySelector("#template .comment");
const errorTemplate = document.getElementById("error");

function addPost({author, mail, title, body, commentNumber}) {
    const node = postTemplate.cloneNode(true);
    node.querySelector(".post--name").innerText = author;
    node.querySelector(".post--mail").innerText = mail;
    node.querySelector(".post--content h3").innerText = title;
    node.querySelector(".post--content p").innerText = body;
    const wrapper = document.querySelector(".post-wrapper");
    wrapper.innerHTML = "";
    wrapper.appendChild(node);
}

function addcomment({username, body}) {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector(".comment-author").innerText = username;
    comment.querySelector(".comment-body").innerText = body;

    document.querySelector(".comment-wrapper").appendChild(comment);
}

const URL = "https://jsonplaceholder.typicode.com";

function error() {
    document.querySelector(".post-wrapper").innerHTML = "";
    document.querySelector(".comments").innerHTML = "";
    const error = errorTemplate.cloneNode(true);
    document.querySelector(".post-wrapper").appendChild(error);
}


fetch(`${URL}/posts/${postId}`)
    .then(res => {
        if(res.status !== 200) throw new Error("Error")
        return  res.json()
    })
    .then(post => {
        fetch(`${URL}/users/${post.userId}`)
            .then(res => res.json())
            .then(author => {
                console.log(author);
                addPost({title: post.title, body: post.body, author: author.name, mail: author.email})
            })
    })
    .catch(err => {
        error();
    })
fetch(`${URL}/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => {
        document.querySelector(".comment-wrapper").innerHTML = "";
        comments.forEach(comment => {
            addcomment({username: comment.email, body: comment.body})
        })
    })
