const dateE1=document.getElementById("date");
const dayE1=document. getElementById("day");
const monthE1=document.getElementById("month");
const yearE1=document.getElementById("year");


const today = new Date();
 

 const weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
 const allmonths=["january","february","march","april","may","june","july","august","septemper","october","november","december"]


 dateE1.innerHTML= today.getDate();
 dayE1.innerHTML=weekdays[today.getDay()];
 monthE1.innerHTML=allmonths[today.getMonth()];
 yearE1.innerHTML= today.getFullYear();