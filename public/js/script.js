const nav = document.getElementById("myNav");
let toggle = document.getElementById("toggle");
const closeBtn = document.getElementById("close-btn");
let resize = document.getElementById("resize");
const myButton = document.getElementById("myBtn");
const img = document.getElementById("avatar");

toggle.addEventListener("click", function resize(){
     resize.style.transition = "all 0.4s";
    resize.style.marginLeft = "450px";
})

//open navbar
toggle.addEventListener("click", function() {
resize.style.display = "block";

});

//close navbar
closeBtn.addEventListener("click", function() {
resize.style.display = "none";
});


// BACK TO TOP BUTTON

//when the user scrolls down 20px from the top of the document; show the botton, when the user scrolls back up (20px); remove button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
            myButton.style.display = "block";
        } else {
            myButton.style.display = "none";
        }
}

// When the user clicks the button; go back to the top
myButton.addEventListener("click", function() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});


// window.addEventListener("load", function() {
//     const loaderWrapper = document.querySelector(".loader-wrapper");
//     loaderWrapper.style.transition = "opacity 0.3s ease"; // Add a transition effect
//     loaderWrapper.style.opacity = 0;

//     setTimeout(function() {
//         loaderWrapper.style.display = "none";
//     }, 300); // Matches the transition duration
// });



 
  

