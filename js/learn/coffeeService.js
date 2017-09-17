angular.module("sproFinder").service("coffeeService", function(){
  this.coffeeTerms = [{
  name: "Drip Coffee",
  image: "img/dripcoffee.jpg",
  desc: "What people typically call your regular coffee. It's made by pouring hot water over a bed of ground coffee beans. The term 'pourover' can imply individually made drinks that usually take about 3 minutes. "
}, {name: "Cappuccino",
  image: "../img/cappuccino.jpg",
  desc: "Espresso combined with steamed and foamed milk. Don't order iced - you will get a weird look."
  },
  {name: "Espresso",
  image: "../img/espresso.jpg",
  desc: "Small amount of water is pushed through a pressurized basket of finely ground coffee beans. Not for the faint of heart."
},

  {name: "Macchiato",
  image: "../img/macchiato.jpg",
  desc: "Espresso with equal amount of steamed milk."
  },
  {name: "Affogato",
  image: "../img/affogato.jpg",
  desc: "Espresso is poured over ice cream. A great treat for a hot summer evening."
},
  {name: "Latte",
  image: "../img/latte.jpg",
  desc: "Espresso with steamed milk. Typically more milk than cappuccino."
},
  {name: "Americano",
  image: "../img/americano.jpg",
desc: "Espresso over hot water. Name is a reference to American soldiers during WW2 who diluted espresso to replicate the drip coffee they were used to in the United States."}
]
});
