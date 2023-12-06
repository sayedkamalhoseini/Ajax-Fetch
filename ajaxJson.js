const postTitle = document.getElementById("post-title").value;
const postBody = document.getElementById("post-body").value;



document.getElementById('button').addEventListener('click', loadPost);
document.getElementById('button1').addEventListener('click', loadPosts);
document.getElementById('button2').addEventListener('click', sendPost);



function sendPost() {
    const postTitle = document.getElementById("post-title").value;
    const postBody = document.getElementById("post-body").value;
    const data = { "userId": 2, "title": postTitle, "body": postBody };


    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

    //   console.log(postTitle);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
        console.log(postTitle);
        if (xhr.status === 201) {
            // console.log(data.title);
            let post = JSON.parse(xhr.responseText);
            let output = `
            <ul>
            <li>ID : ${post.userId} </li>
            <li>ID : ${post.title} </li>
            <li>ID : ${post.body} </li>
            </ul>
            `
            document.getElementById('output').innerHTML = output;
        }
    }
    xhr.send(JSON.stringify(data));
}

function loadPost() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'post.json');

    xhr.onload = () => {
        if (xhr.status === 201) {
            let post = JSON.parse(xhr.responseText);
            let output = `
        <ul>
        <li>ID : ${post.id} </li>
        <li>ID : ${post.title} </li>
        <li>ID : ${post.body} </li>
        </ul>
        `
            document.getElementById('output').innerHTML = output;
        }
    }
    xhr.send();
}

function loadPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.onload = () => {
        if (xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);

            let output = "";


            posts.forEach(post => {
                output += `
                <ul>
                <li>ID : ${post.id} </li>
                <li>Title : ${post.title} </li>
                <li>Body : ${post.body} </li>
                </ul>       
                
                `
            });

            document.getElementById('output').innerHTML = output;
        }
    }
    xhr.send();
}


