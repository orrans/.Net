const TDA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumArrays(arr) {
  let arrsSum = [];
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      sum += arr[i][j];
    }
    arrsSum.push(sum);
    sum = 0;
  }
  return arrsSum;
}

function Car(manufacturer, model, year, owner, hand) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.hand = Number(hand);

  this.printDetails = () => {
    let carContainer = document.createElement("div");
    let resultDiv = document.querySelector("#CarList");
    let CarsCount = document.querySelector("#CarsCount");
    carContainer.classList.add(`CarContainer`, `col-md-3`, "col-sm-4", "col-xs-12", "col-lg-2");
    let resultHTML = "";
    resultHTML += `<table class="table table-bordered">`;

    resultHTML += "<tr>";
    resultHTML += `<th class="text-center" colspan=2>Car ${cars.length}</th>`;
    resultHTML += "</tr>";

    resultHTML += "<tr>";
    resultHTML += `<th>Manufacturer</th>
      <td>${this.manufacturer}</td>`;
    resultHTML += "</tr>";

    resultHTML += "<tr>";
    resultHTML += `<th>Model</th>
      <td>${this.model}</td>`;
    resultHTML += "</tr>";

    resultHTML += "<tr>";
    resultHTML += `<th>Year</th>
      <td>${this.year}</td>`;
    resultHTML += "</tr>";

    resultHTML += "<tr>";
    resultHTML += `<th>Owner</th>
      <td>${this.owner}</td>`;
    resultHTML += "</tr>";

    resultHTML += "<tr>";
    resultHTML += `<th>Hand</th>
      <td>${this.hand}</td>`;
    resultHTML += "</tr>";

    resultHTML += "</table>";
    carContainer.innerHTML = resultHTML;
    CarsCount.innerHTML = cars.length;
    resultDiv.appendChild(carContainer);
  };
  this.changeOwnership = (owner) => {
    this.owner = owner;
    this.hand++;
  };
}

const cars = [
    new Car("Toyota", "Corola", 2016, "avi tov", 2),
];

function addCar(event, form) {
  event.preventDefault();
  let data = new FormData(form);
  const car = new Car(
    data.get("manufacturer"),
    data.get("model"),
    data.get("year"),
    data.get("owner"),
    data.get("hand")
  );
  cars.push(car);
  car.printDetails();
  form.reset();
  return false;
}

cars.forEach((car) => {
  car.printDetails();
});
