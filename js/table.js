// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, ref, child, onValue, get, remove} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Mw4Ugdj8bWA1Uz8LECt3sUt3m3Kfgsw",
  authDomain: "gofundz-5b149.firebaseapp.com",
  databaseURL: "https://gofundz-5b149-default-rtdb.firebaseio.com",
  projectId: "gofundz-5b149",
  storageBucket: "gofundz-5b149.appspot.com",
  messagingSenderId: "228985745417",
  appId: "1:228985745417:web:e1d9f455196fd1684948d8",
  measurementId: "G-K9GV667K53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

var tbody = document.getElementById('tbody1');
var tbody2 =  document.getElementsByClassName('second');

function AddItemtotable(FirstName, Lastname, Phone, Donation, Mail, donationId) {
let trow = document.createElement("tr");
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td4 = document.createElement('td');
let td5 = document.createElement('td');
let td6 = document.createElement('td');
let td7 = document.createElement('td');
td1.innerHTML = FirstName;
td2.innerHTML = Lastname;
td4.innerHTML = Phone;
td5.innerHTML = Donation;
td6.innerHTML = Mail;
td7.innerHTML = donationId;  
trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);
trow.appendChild(td7);
tbody.appendChild(trow);
}

function addallitemstotable(available) {
tbody.innerHTML = "";
available.forEach(element => {
AddItemtotable(element.FirstName, element.Lastname, element.Phone, element.Donation, element.Mail, element.donationId);
});
}


function GetAllDataonce() {
const dbRef = ref(database);
get(child(dbRef, "donatetwo"))
.then((snapshot) => {
  var donate = [];

  snapshot.forEach(childSnapshot => {
    donate.push(childSnapshot.val());
  });
  addallitemstotable(donate);
});
}
window.onload = GetAllDataonce;

// function AddItemtotable2(FirstName, Lastname, Phone, Donation, Mail, donationId) {
// let trow = document.createElement("tr");
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td4 = document.createElement('td');
// let td5 = document.createElement('td');
// let td6 = document.createElement('td');
// let td7 = document.createElement('td');
// td1.innerHTML = FirstName;
// td2.innerHTML = Lastname;
// td4.innerHTML = Phone;
// td5.innerHTML = Donation;
// td6.innerHTML = Mail;
// td7.innerHTML = donationId;  
// trow.appendChild(td1);
// trow.appendChild(td2);
// trow.appendChild(td4);
// trow.appendChild(td5);
// trow.appendChild(td6);
// trow.appendChild(td7);
// tbody.appendChild(trow);
// }

// function addallitemstotable2(available) {
// tbody2.innerHTML = "";
// available.forEach(element => {
// AddItemtotable2(element.FirstName, element.Lastname, element.Phone, element.Donation, element.Mail, element.donationId);
// });
// }


// function GetAllDataonce2() {
// const dbRef = ref(database);
// get(child(dbRef, "donateone"))
// .then((snapshot) => {
//   var donate2 = [];

//   snapshot.forEach(childSnapshot => {
//     donate2.push(childSnapshot.val());
//   });
//   addallitemstotable2(donate2);
// });
// }

// window.onload = GetAllDataonce2;