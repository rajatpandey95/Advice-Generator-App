let content =document.getElementById("content");
let adviceId = document.getElementById("adviceId");
let button = document.getElementById("button");
let url = "https://api.adviceslip.com/advice";


//API Fetching
//fetch returns a promise    and two .then is used to handle it
function apiFetch(){
    fetch(url).then((response) =>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        adviceId.innerText = data.slip.id;
        content.innerText = '"' + data.slip.advice + '"';  
    })
}


function clicked() {
    apiFetch();
}