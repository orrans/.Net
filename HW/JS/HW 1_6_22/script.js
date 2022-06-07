function dollarTree() {
  for (var i = 0; i < 7; i++) {
    var $ = "";
    for (var j = 0; j < i; j++) {
      $ += "$";
    }
    console.log($);
  }
}

function tree(height) {
  for (let i = 0; i < height; i++) {
    let str = "";
    for (let j = 0; j < height - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i * 2 + 1; k++) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = 0; i < 1; i++) {
    console.log(" ".repeat(height - i) + "*");
  }
}

function circle(radius) {
  // r = 5
  // h = r
  // maxw = (r*2)+1
  // minw = r
  let out = "";
  let h = 2 * radius;
  let w = 2 * radius;
  // rows
  for (let y = 0; y <= h; y++) {
    // column
    for (let x = 0; x <= w; x++) {
      let distance = Math.sqrt(Math.pow(y - h / 2, 2) + Math.pow(x - w / 2, 2));
      if (distance < radius) {
        out += "*";
      } else {
        out += " ";
      }
    }
    out += "\n";
  }
  console.log(out);
}

function fizzBuzz() {
  for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
