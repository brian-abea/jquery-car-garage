// an array to store all of our cars
let garage = [];

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  // add click event handler that calls the addNewCar function
  $("#add-car").on("click", addNewCar);
}

// maximum number of spaces
const maxSpaces = 5;

function addNewCar() {
  // disable inputs if garage is full
  if (garage.length >= maxSpaces) {
    $("#year").prop("disabled", true);
    $("#make").prop("disabled", true);
    $("#model").prop("disabled", true);
    $("#imageurl").prop("disabled", true);
    alert("The garage is full");
    return;
  }

  // get input values
  const year = $("#year").val();
  const make = $("#make").val();
  const model = $("#model").val();
  const imageUrl = $("#imageurl").val();
  const price = $("#price").val();



  // create new car object
  const newCar = { year, make, model, imageurl, price };

  // validate inputs
  if (!year || !make || !model || !imageurl || !price) {
    alert("Please fill out all inputs");
    return;
  }

  // add to array
  garage.push(newCar);

  // clear the fields
  $("#year").val("");
  $("#make").val("");
  $("#model").val("");
  $("#imageurl").val("");
  $("#price").val("");


  // update the DOM
  render();
  
}

function render() {
  // clear the current car list
  $("#car-list").empty();


  // loop through the garage array and add each car to the DOM as an <li> element
  for (let car of garage) {
    const carListItem = $("<li>").text(`${car.year} ${car.make} ${car.model} ${car.imageurl}`);
    $("#car-list").append(carListItem);
  }
}

// Adding a new Remove button 
function render() {
  // clear the current list of cars
  $("#car-list").empty();

  // calculate the total price of all cars in the garage
  let totalPrice = 0;
  for (let car of garage) {
    totalPrice += Number(car.price);
  }

  // update the total price display
  $("#total-price").text(`Total Price: $${totalPrice.toFixed(2)}`);

  // render each car in the garage
  for (let i = 0; i < garage.length; i++) {
    let car = garage[i];
    let listItem = $("<li>");

    // create a label for the car
    let label = `${car.year} ${car.make} ${car.model} $${car.price}`;

    // create a "Remove Car" button
    let removeButton = $("<button>")
      .text("Remove Car")
      .addClass("remove-button");

    removeButton.on("click", function() {
      // remove the car from the DOM
      listItem.remove();

      garage.splice(i, 1);
      render();
    });

    // create an image tag for the car
    let carImage = $("<img>")
      .addClass("imageurl")
      .attr("src", car.imageurl);

    // create a price tag for the car
    let carPrice = $("<p>").text(`Price: $${car.price}`);

    // add the label and button to the list item
    listItem.text(label);
    listItem.append(carImage);
    listItem.append(carPrice);
    listItem.append(removeButton);

    // add the list item to the car list
    $("#car-list").append(listItem);
  }
}
