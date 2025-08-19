const menuPage = function(){
  const menuCard= document.createElement("div");
  menuCard.classList.add("menuCard");
  content.appendChild(menuCard);

  const pancakes=document.createElement("div");
  pancakes.classList.add("pancakes");
  menuCard.appendChild(pancakes);
  const pancakesTitle=document.createElement("div");
  pancakesTitle.textContent="Pancakes";
  pancakesTitle.classList.add("menuTitle");
  pancakes.appendChild(pancakesTitle);
  const pancakesImg= document.createElement("img");
  pancakesImg.src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  pancakesImg.alt="Pancakes";
  pancakes.appendChild(pancakesImg)
  const pancakesDescription=document.createElement("div");
  pancakesDescription.textContent="Pancakes with banana, mint and syrup.";
  pancakes.appendChild(pancakesDescription);
  const pancakesCredits= document.createElement("a");
  pancakesCredits.href="https://unsplash.com/pt-br/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  pancakesCredits.textContent="Photo by Chad Montano";
  pancakes.appendChild(pancakesCredits);

  const pizza=document.createElement("div");
  pizza.classList.add("pizza");
  menuCard.appendChild(pizza);
  const pizzaTitle=document.createElement("div");
  pizzaTitle.textContent="Pizza";
  pizzaTitle.classList.add("menuTitle");
  pizza.appendChild(pizzaTitle);
  const pizzaImg= document.createElement("img");
  pizzaImg.src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  pizzaImg.alt="Pizza";
  pizza.appendChild(pizzaImg)
  const pizzaDescription=document.createElement("div");
  pizzaDescription.textContent="Pizza of pineapple, shredded chicken, parsley and onion.";
  pizza.appendChild(pizzaDescription);
  const pizzaCredits= document.createElement("a");
  pizzaCredits.href="https://unsplash.com/pt-br/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  pizzaCredits.textContent="Photo by Chad Montano";
  pizza.appendChild(pizzaCredits);

  const burger=document.createElement("div");
  burger.classList.add("burger");
  menuCard.appendChild(burger);
  const burgerTitle=document.createElement("div");
  burgerTitle.textContent="Burger";
  burgerTitle.classList.add("menuTitle");
  burger.appendChild(burgerTitle);
  const burgerImg= document.createElement("img");
  burgerImg.src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  burgerImg.alt="Burger";
  burger.appendChild(burgerImg)
  const burgerDescription=document.createElement("div");
  burgerDescription.textContent="Burger with cow meat, tomato, lettuce, pickles, cheese and onions";
  burger.appendChild(burgerDescription);
  const burgerCredits= document.createElement("a");
  burgerCredits.href="https://unsplash.com/pt-br/@mashkov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  burgerCredits.textContent="Photo by Ilya Mashkov";
  burger.appendChild(burgerCredits);
      

}

export {menuPage};