const aboutPage= function(){
  const aboutCard= document.createElement("div");
  aboutCard.classList.add("aboutCard");
  content.appendChild(aboutCard);

  const phoneNumber= document.createElement("div");
  phoneNumber.textContent="Contact: ###-###-###";
  aboutCard.appendChild(phoneNumber);

  const email = document.createElement("div");
  email.textContent="Email: randomEmail@mail.com";
  aboutCard.appendChild(email);

  const randomInformation= document.createElement("div");
  randomInformation.textContent="Open from monday to Saturday. From 11am-3pm and 6pm-10pm.";
  aboutCard.appendChild(randomInformation);

}

export{aboutPage};