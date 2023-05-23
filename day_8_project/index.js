const postTemplate = document.querySelector("#template .post");
const loaderTemplate = document.querySelector("#template #loaders")
const posts = document.querySelector(".posts");
const morePost = document.querySelector(".more-post");


function addPost({author, mail, title, body, commentNumber}) {

    const node = postTemplate.cloneNode(true);
    node.querySelector(".post--name").innerText = author;
    node.querySelector(".post--mail").innerText = mail;
    node.querySelector(".post--content h3").innerText = title;
    node.querySelector(".post--content p").innerText = body;
    node.querySelector(".post--footer .comment").innerText = commentNumber;

    posts.appendChild(node);
}

function addPostLoader() {
    const loaders = loaderTemplate.cloneNode(true);
    posts.appendChild(loaders);
};

function removePostLoader() {
    const loader = document.querySelector(".posts > #loaders");
    if(loader) loader.remove();
    window.scrollTo(0, document.body.scrollHeight);
}

let page = 1;

const URL = "https://jsonplaceholder.typicode.com";

function getPost(page, limit, callback) {
    addPostLoader();

    fetch(`${URL}/posts?_page=${page}&_limit=${limit}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            callback(data)
        })
}

function displayPosts(page , limit) {
    getPost(page, limit, (data) => {
        data.forEach(el => {
            function addPostDetails({author, mail, commentNumber}) {
                addPost({
                    author: author,
                    body: el.body,
                    title: el.title,
                    commentNumber: commentNumber,
                    mail: mail
                })
            }

            fetch(`${URL}/users/${el.userId}`).then(res => {
                return res.json()
            }).then(data => {
                function addCommentDetails(commentNumber) {
                    addPostDetails({author: data.name, mail: data.email , commentNumber : commentNumber})
                }

                fetch(`${URL}/posts/${el.id}/comments`)
                    .then(res => res.json())
                    .then(data => {
                        addCommentDetails(data.length)
                    })
                    .finally(()=>{
                        removePostLoader();
                    })
            })
        })
    })
}

displayPosts(1 , 5)

morePost.addEventListener('click' , ()=> {
    displayPosts(++page , 5)
})