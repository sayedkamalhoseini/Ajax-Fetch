document.getElementById('button').addEventListener('click',loadData);


function loadData(){
const xhr=new XMLHttpRequest();
xhr.open('GET','data.txt');

xhr.onload=()=>{
    if(xhr.status===200){
        document.getElementById('output').innerHTML=xhr.responseText;
    }
}

xhr.send();
}