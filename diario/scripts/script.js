const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const items = document.querySelector("ul");

button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Funfa");
})

// inputs.addEventListener("focusout", () => {
//     console.log("teste")
// })

inputs.forEach(input => input.addEventListener("focusout", () => {
    // console.log(input.value)
    items.innerHTML += `<li></li>${input.value}</li>`;
}))