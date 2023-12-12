let ul = document.getElementById("ul");
let a = document.getElementById("row");

document.getElementById("ok-btn").addEventListener("click", e =>{
    for (let i = 0; i < parseInt(a.value); i++) {
        const li = document.createElement("li");
        for (let j = 0; j <= i; j++) {
            li.innerText += "*";
        }
        ul.appendChild(li);
    }
})
