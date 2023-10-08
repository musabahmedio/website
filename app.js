var email = document.getElementById("email")
var number = document.getElementById("number")
var days = document.getElementById("days")
var idNumber = document.getElementById("idNumber")
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase,
         ref,
         set,
         push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDvIx7RYwP95oy3-PL8NYdCOD0yc8OCjSc",
  authDomain: "website-11568.firebaseapp.com",
  projectId: "website-11568",
  storageBucket: "website-11568.appspot.com",
  messagingSenderId: "1052052611671",
  appId: "1:1052052611671:web:bb14ab309ee78ac68df912"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var database = getDatabase(app)

// window.sendData = function() {
//     var customerData = {
//         email : email.value,
//         number : number.value,
//         days : days.value,
//         idNumber : idNumber.value,
//     }
//     var referkey  = ref(database)
//     var randomId = push(referkey).key
//     customerData.id = randomId 

//     var reference = ref(database,`customerData/${customerData.id}`)
//     set(reference,customerData)
// }

window.sendData = function() {
  var customerData = {
      email: email.value,
      number: number.value,
      days: days.value,
      idNumber: idNumber.value,
  }
  
  var referkey = ref(database);
  var randomId = push(referkey).key;
  customerData.id = randomId;

  var reference = ref(database, `customerData/${customerData.id}`);
  
  // Set the data in the database and handle success/error
  set(reference, customerData)
      .then(() => {
          // Data was successfully sent to the database
          // You can navigate to the next page here
          window.location.href = "response.html";
      })
      .catch((error) => {
          // There was an error sending data to the database
          console.error("Error sending data to the database:", error);
          // You can optionally show an error message to the user
          alert("Error sending data to the database. Please try again.");
      });
}


//    navbar Fixed//
var navBar = document.querySelectorAll(".nav-link");
var navCollapse = document.querySelector(".navbar-collapse.collapse")   
navBar.forEach(function(a){
    a.addEventListener('click',function(){
        navCollapse.classList.remove('show')
    })
}) 

//timer ///
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         var ob = document.getElementById(id),
//             current = start,
//             range = end - start,
//             increment = end > start ? 1 : -1,
//             step = Math.abs(Math.floor(duration / range)),
//             timer = setInterval(() => {
//                 current += increment;
//                 ob.textContent = current;
//                 if (current == end) {
//                     clearInterval(timer);
//                 }
//             }, step);
//     }
//     counter("count1", 0, 1287, 3000);
//     counter("count2", 100, 3556, 2500);
//     counter("count3", 0, 1440, 3000);
//     counter("count4", 0, 2110, 3000);
// });

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start;
      let range = end - start;
      let increment = end > start ? 1 : -1;
      let step = Math.abs(Math.floor((range / duration) * 10)); // Calculate step based on duration and range
  
      let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
          clearInterval(timer);
        }
      }, step);
    }
    counter("count1", 0, 1287, 3000);
     counter("count2", 100, 3556, 2500);
     counter("count3", 0, 1440, 3000);
     counter("count4", 0, 2110, 3000);
})

// database//



