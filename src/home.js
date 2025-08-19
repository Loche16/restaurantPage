const homePage = function(){


  const homeCard= document.createElement("div");
  homeCard.classList.add("homeCard");
  content.appendChild(homeCard);

  const textContainer=document.createElement("div");
  textContainer.classList.add("textContainer");
  homeCard.appendChild(textContainer);

  const restaurantName=document.createElement("div");
  restaurantName.textContent="Restaurant Of Restaurants";
  restaurantName.classList.add("restaurantName");
  textContainer.appendChild(restaurantName);

  const homeContent= document.createElement("div");
  homeContent.textContent="The BEST of the BESTEST, where the bigger of the biggest plates are served!";
  textContainer.appendChild(homeContent);

  
}

export {homePage};