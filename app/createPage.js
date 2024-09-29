let postsContainer = document.getElementById('postsContainer');
let postCreator = document.getElementById('postCreator');

let ls = localStorage;

$.getJSON('https://sheetdb.io/api/v1/6q955ouwwiue5', function (blog_posts) {

    for (let i = blog_posts.length - 1; i >= 0; i--) {

        let post = document.createElement("div");

        let postUuid = blog_posts[i].uuid;
        let postTimestamp = document.createElement("span");
        let postTitle = document.createElement("h2");
        let postBody = document.createElement("p");

        post.classList.add('post');

        postTimestamp.innerText = blog_posts[i].timestamp;
        postTitle.innerText = blog_posts[i].title;
        postBody.innerText = blog_posts[i].body;

        post.setAttribute('id', postUuid);
        post.appendChild(postTimestamp);
        post.appendChild(postTitle);
        post.appendChild(postBody);

        postsContainer.appendChild(post);

    }

});

// looks if the user should have the ability to post - aka if the user is me

let isOwner;

if (ls.getItem("jakobusMaximus") == 'true') {
    isOwner = true;
} else {
    console.log(isOwner);
}

document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.keyCode == 13 && isOwner == true) {
        postCreator.style.display = 'flex';
    } else if(e.ctrlKey && e.keyCode == 13) {
        let userPassword = window.prompt('PASSWORD: ');

        if(userPassword == 'lynnunity2005') {
            ls.setItem("jakobusMaximus", true);
            postCreator.style.display = 'flex';
        } else {
            alert('Sorry, wrong password');
        }
    }
} );

// checks if user should see content of blog

if(ls.getItem("showContent") == 'true') {
    nsfwWarning.style.opacity = '0%';
    nsfwWarning.style.display = 'none';
} else {
    nsfwWarning.style.opacity = '100%';
    nsfwWarning.style.display = 'flex';
}

function showContent() {
    let nsfwWarning = document.getElementById('nsfwWarning');
    nsfwWarning.style.opacity = '0%';
    nsfwWarning.style.display = 'none';
    ls.setItem("showContent", true);
}