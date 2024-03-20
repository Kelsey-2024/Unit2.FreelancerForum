//we need to create a Freelancer Forum

//Header: Starting price is $30
  //This is the average of starting prices, create function called calculateAveragePrice
  //use reduce to calculate and then divide by the length of the array.

//Header: Available Freelancers

//State
const freelancersEstate = [
  {name: `Alice`, occupation: `Writer`, startingPrice: 30}, 
  {name: `Bob`, occupation: `Teacher`, startingPrice: 50}, 
  {name: `Carol`, occupation: `Programmer`, startingPrice: 70}, 
  {name: `Veronica`, occupation: `Mechanic`, startingPrice: 80},
];    

//calculating the average
function calculateAveragePrice() {
  //loop through the array and get the average by using reduce
  freelancersEstate.reduce((currentTotal, currentObj) => {
    return (currentTotal + currentObj.startingPrice) / freelancersEstate.length;
  },0);
}


//sync freelancers to the DOM
function freelancerForum() {
  const freelancerList = document.getElementById(`freelancerList`); //inside my table
  freelancerList.innerHTML = ``;
//Loop through the array using forEach
  freelancersEstate.forEach(freelancerArr => {
    const tr = document.createElement(`tr`); //We're creating table rows for the existing data that will live under the respected th
    //on html I create a table that contains the table headers (th) name, occupation and starting price
    const listName = document.createElement('td');
    listName.textContent = freelancerArr.name;
    tr.appendChild(listName);

    const listOccupation = document.createElement(`td`);
    listOccupation.textContent = freelancerArr.occupation;
    tr.appendChild(listOccupation);

    const listStartingPrice = document.createElement(`td`);
    listStartingPrice.textContent = `$${freelancerArr.startingPrice}`;
    tr.appendChild(listStartingPrice);
  
    freelancerList.appendChild(tr);
  })
//create elements for the list items
//set them equal to my objects in the array
//append child. repeat.
}
//calculating the average and rendering the freelancers (I wasn't sure how to do this so I searched it up.)
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById(`averageStartingPrice`).textContent = calculateAveragePrice();
  freelancerForum();
})
// `setInterval` will call a function every 1000 milliseconds (1 second)
  //setInterval(() => {pushArrFunc(fArr1, fArr2)}, 3000);
  //const returnID(can change this to anything) = setInterval(() => {pushArrFunc(fArr1, fArr2)}, 3000);
  //if(fArr2.length === 0) {
    //clearInterval(returnID);
  //}
const addFreelancerInterval = setInterval(addExtraFreelancers, 1000);

//Randos for my randomFreelancer function
const randomAvailableNames = [`Tracey`, `Matteo`, `Steve`, `Christopher`, `Brenda`, `Silvester`, `Lily`, `Robert`];
const randomAvailableOccupations = [`Writer`, `Teacher`, `Programmer`, `Mechanic`];
const someStartingPrice = [40, 60, 80, 90, 70, 50,];

//function for randomAvailableNames, randomAvailableOccupation, someStartingPrice below
function randomFreelancerGenerator() {
  const name = randomAvailableNames[Math.floor(Math.random() * randomAvailableNames.length)];
  const occupation = randomAvailableOccupations[Math.floor(Math.random() * randomAvailableOccupations.length)];
  const startingPrice = someStartingPrice[Math.floor(Math.random() * someStartingPrice.length)];
  //setting a limit on my generator
  if(freelancersEstate.length === 25){
    clearInterval(addFreelancerInterval);
  }

  return{
    name,
    occupation,
    startingPrice,
  };
}

//sync my random freelancer to the dom and render
function addExtraFreelancers() {
  const freelancer = randomFreelancerGenerator();
  freelancersEstate.push(freelancer);

  freelancerForum();
  document.getElementById(`averageStartingPrice`).textContent = calculateAveragePrice();
}