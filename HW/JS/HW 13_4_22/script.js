function ex1(a, b) {
    let c = a ** 2 + b ** 2;
    return Math.sqrt(c);
  }

  function ex2(x, y) {
    let obj = {
      a: x,
      b: y,
      c: ex1(x, y),
    };
    return obj;
  }

  function ex3(a, b, c) {
    let isRightTriangle = false;
    if (ex1(a, b) == c || ex1(a, c) == b || ex1(b, c) == a) {
      isRightTriangle = true;
      return console.log(
        `a: ${a}\nb: ${b}\nc: ${c}\nIs Right Triangle? - ${isRightTriangle}`
      );
    } else
      return console.log(
        `a: ${a}\nb: ${b}\nc: ${c}\nIs Right Triangle? - ${isRightTriangle}`
      );
  }

  function Car(make, model, year, owner, hand) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.hand = Number(hand);

    this.printDetails = () => {
      console.log(
        `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nOwner: ${this.owner}\nHand: ${this.hand}`
      );
      let resultDiv = document.querySelector("#result");
      let resultHTML = "";
      resultHTML += "<table>";

      resultHTML += "<tr>";
      resultHTML += `<th>Make</th>
      <td>${this.make}</td>`;
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
      resultDiv.innerHTML = resultHTML;
    };
    this.changeOwnership = (owner) => {
      this.owner = owner;
      this.hand++;
    };
  }

  car = new Car("Toyota","Corola",2016,"Bill Gates",2);
  car.printDetails();