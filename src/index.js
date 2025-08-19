import "./styles.css";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

const content=document.getElementById("content");
const body=document.getElementById("body");

const backgroundImg= document.createElement("img")
backgroundImg.src= "https://images.unsplash.com/photo-1723075471552-26781157140e?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
backgroundImg.alt="Chiefs in a kitchen";
backgroundImg.classList.add("backgroundImg");
body.appendChild(backgroundImg);

const credits= document.createElement("a");
credits.href="https://unsplash.com/pt-br/@angelina_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
credits.textContent="Photo by Angelina Kusznirewicz";   
credits.classList.add("credits"); 
body.appendChild(credits);

homePage()

const homeBtn=document.getElementById("homeBtn");
const menuBtn= document.getElementById("menuBtn");
const aboutBtn=document.getElementById("aboutBtn");

menuBtn.addEventListener("click", ()=>{
  content.innerHTML="";
  menuPage();
})

homeBtn.addEventListener("click", ()=>{
  content.innerHTML="";
  homePage();
})

aboutBtn.addEventListener("click", ()=>{
  content.innerHTML="";
  aboutPage();
})