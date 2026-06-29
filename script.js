// const result1 = document.querySelector(".subTitle");
// const result2 = document.querySelectorAll(".subTitle");
// const result2 = document.getElementsByClassName('subTitle')

// const result1 = document.querySelector('#title')
// const result2 = document.querySelectorAll('#title')

// console.log(result1);
// console.log(result2[0]);

// const items = document.querySelectorAll(".container .list .item");

// items.forEach((item) => {
//   item.style.color = "yellow";
// });

const h2 = document.querySelector("#text");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (h2.classList.contains("me")) {
    //we are removing the color
    h2.classList.remove("me");

    // set label to "Click"
    btn.textContent = "Click";
  } else {
    // we are adding the background color
    h2.classList.add("me");

    // set label to "Back To White"
    btn.textContent = "Back To White";
  }
});



// create h1 
const title = document.createElement('h1')
title.textContent = "hello From Moslem Ajra"
 
document.body.appendChild(title)

 
// create a div

/* 
<body>

<div class="mySection">
<p>Hello This is Moslem Ajra From GoMyCode!</p>
</div>


</body>



*/
const container  = document.createElement('div')
container.className = "mySection"


const text  = document.createElement('p')
text.textContent = "Hello This is Moslem Ajra From GoMyCode!"

container.appendChild(text )

document.body.append(container)
