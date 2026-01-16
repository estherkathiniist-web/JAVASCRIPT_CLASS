// Find the element from the document

const heading = document.getElementById("heading");

const btn1 = document.getElementById("btn1").addEventListener("click", () => {
  alert(heading.innerText);
});

const btn2 = document.getElementById("btn2").addEventListener("click", () => {
  // change text content
  heading.innerText = "Javascript is fun!";
});

const btn3 = document.getElementById("btn3").addEventListener("click", () => {
  // style with css
  heading.style.color = "purple";
  heading.style.fontStyle = "italic";
  heading.style.fontSize = "15px";

  // style with bootstrap
  heading.classList.add("alert", "alert-danger");
});

const btn4 = document.getElementById("btn4").addEventListener("click", () => {
  // change background color to pink using css
  document.body.style.backgroundColor = "pink";
});


// Mouse over
btn5.addEventListener("mouseover", () => {
  btn5.style.transform = "scale(1.2)"; //bigger
  btn5.classList.add("bg-info", "text-light");
  btn5.textContent = "Coding!";
});

// Mouse out
btn5.addEventListener("mouseout", ()=> {
  btn5.classList.remove("bg-info", "text-light")
  btn5.style.transform = "scale(1)"
  btn5.textContent = "Mouse!"
})

// Assignment: change between darkmode and light mode
const btn6 = document.getElementById("btn6").addEventListener("click", () => {
  // toggle dark mode
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-light");

  //heading style for visibility
  heading.classList.toggle("text-warning");
});


// FIND THE INPUT AND THE BUTTTON
constinput=document.getElementById("input")  //user
const showhide=document.getElementById("showhide") //toggle to hide and show

// FIND THE ICON
const icon=document.querySelector("i")
showhide.addEventListener("click", ()=>{
if(input.type==="password"){
  input.type="text"
  icon.classList.remove("bi-eye-slash")
  icon.classList.add("bi-eye")
}else{
  input.type="password"
  icon.classList.add("bi-eye-slash")
  icon.classList.remove("bi-eye")  
}
})

const form=document.getElementById("form")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
})

