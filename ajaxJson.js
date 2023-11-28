document.getElementById('button').addEventListener('click',loadData);


function loadData(){
const xhr=new XMLHttpRequest();
xhr.open('GET','data.json');

xhr.onload=()=>{
    if(xhr.status===200){
        let post=JSON.parse(xhr.responseText);
        let output=`
        <ul>
        <li>ID : ${post.id} </li>
        <li>ID : ${post.title} </li>
        <li>ID : ${post.body} </li>
        </ul>

        `
        document.getElementById('output').innerHTML=output;
    }
}

xhr.send();
}