let blogPosts = document.getElementById('blogPosts');
let createMessage = document.getElementById('createMessage');

let postDate = document.getElementById('postDate');

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

postDate.value = today.getHours() + ":" + today.getMinutes() + " - " + mm + '/' + dd + '/' + yyyy;

let createPostContainer = document.getElementById('createPostContainer');

createMessage.addEventListener('keyup', e => {
    createMessage.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    createMessage.style.height = scHeight + "px";
});

$.getJSON('https://sheetdb.io/api/v1/wh2e3ebez0789', function (blog_posts) {
    for (let i = blog_posts.length - 1; i <= blog_posts.length; i--) {
        // creates blog post elements
        let blogPostContainer = document.createElement("div");
        let blogPostHeader = document.createElement("h3");
        let blogPostText = document.createElement("p");
        let blogPostImg = document.createElement("img");
        let blogPostDate = document.createElement("span");

        blogPostContainer.classList.add("blog-post");
        blogPostContainer.setAttribute("id", i);

        blogPostHeader.innerText = blog_posts[i].post_header;
        blogPostText.innerText = blog_posts[i].post_txt;

        // adds post elements to posts container

        blogPosts.appendChild(blogPostContainer);
        blogPostContainer.appendChild(blogPostHeader);
        blogPostContainer.appendChild(blogPostText);
        blogPostContainer.appendChild(blogPostDate);
        if (blog_posts[i].post_img != null) {
            blogPostImg.src = blog_posts[i].post_img;
            blogPostContainer.appendChild(blogPostImg);
        } else {
            console.log("No image available");
        }
        blogPostDate.innerText = blog_posts[i].post_date;
    }
});

window.addEventListener('keyup', function(e) {
    if (e.keyCode == 113) {
        let password = window.prompt("Please enter password to continue");
        if (password == "lynnunity2005") {
            createPostContainer.style.display = 'flex';
        } else {
            createPostContainer.style.display = 'none';
        }
    } else {
        return;
    }
});