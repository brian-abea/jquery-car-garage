// an array to store all of our cars
let garage = [];

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  // add click event handler that calls the addNewCar function
  $("#add-car").on("click", addNewCar);
}

function addNewCar() {
  // get input values
  const year = $("#year").val();
  const make = $("#make").val();
  const model = $("#model").val();

  // create new car object
  const newCar = { year, make, model };

  // add to array
  garage.push(newCar);


  // update the DOM
  render();
}

function render() {
  // clear the current car list
  $("#car-list").empty();


  // loop through the garage array and add each car to the DOM as an <li> element
  for (let car of garage) {
    const carListItem = $("<li>").text(`${car.year} ${car.make} ${car.model}`);
    $("#car-list").append(carListItem);
  }
}

// Add new Remove button 

function render() {
  // clear the current list of cars
  $("#car-list").empty();

  // render each car in the garage
  for (let i = 0; i < garage.length; i++) {
    let car = garage[i];
    let listItem = $("<li>");

    // create a label for the car
    let label = `${car.year} ${car.make} ${car.model}`;

    // create a "Remove Car" button
    let removeButton = $("<button>")
      .text("Remove Car")
      .addClass("remove-button");

    // attach a click event listener to the "Remove Car" button
    removeButton.on("click", function() {
      // remove the car from the DOM
      listItem.remove();

      // STRETCH GOAL: remove the car from the state (array) and call render()
      garage.splice(i, 1);
      render();
    });

    // add the label and button to the list item
    listItem.text(label);
    listItem.append(removeButton);

    // add the list item to the car list
    $("#car-list").append(listItem);
  }
}
