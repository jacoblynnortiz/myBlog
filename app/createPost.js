// this code sets the value for the new posts uuid and timestamp

let uuidInput = document.getElementById('uuidInput');
$.getJSON('https://sheetdb.io/api/v1/6q955ouwwiue5', function (blog_posts) {
    uuidInput.value = blog_posts.length;
});

let timestampInput = document.getElementById('timestampInput');

// gets current date to be able to make timestamp for post

setInterval(function () {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    let hrs = today.getHours();
    let min = today.getMinutes();

    const datePosted = hrs + ':' + min + ' - ' + mm + '/' + dd + '/' + yyyy;

    timestampInput.value = datePosted;
}, 1000);

// this code only effects my expereince while making a post

var form1 = document.getElementById('sheetdb-form-1');
form1.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form1.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form-1")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'blog.html', '_blank';

    });
});
