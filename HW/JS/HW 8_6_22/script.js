let sumOfProduct = (a, b) => {
  return function (c, d) {
    return function (e, f) {
      return a * c * e + b * d * f;
    };
  };
};

let x = [3, 3, 3, 3, 3, 3, 3];
/**
 *
 * @param {Array} x
 * @param {number} times
 * @returns
 */
function change(x, times) {
  //let xChange = x.slice();
  let xChange = [...x];
  for (let i = 0; i < xChange.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < xChange.length - j) {
        xChange[i]--;
      }
      j++;
    }
  }
  return xChange;
}

function creatTest(a, b) {
  let aString = JSON.stringify(a);
  let bString = JSON.stringify(b);
  if (typeof a === "number" && typeof b === "number") {
    return `Test.assertEquals(createTest(${aString}, ${bString}), ${JSON.stringify(a + b)})`;
  } else if (typeof a === "string" && typeof b === "string") {
    return `Test.assertEquals(createTest(${aString}, ${bString}), ${JSON.stringify(a + b)})`;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return `Test.assertEquals(createTest(${aString}, ${bString}), ${JSON.stringify([...a, ...b])})`;
  }
}

function erase(a) {
  let copy = "";
  a.split("").forEach((letter) => {
    if (letter === "#") {
      copy = copy.slice(0, -1);
    } else {
      copy += letter;
    }
  });
  return copy;
}

function movingPartition(a) {
  let arrayCopy = [];
  for (let i = 1; i < a.length; i++) {
    let result = [a.slice(0, i), a.slice(i)];
    arrayCopy.push(result);
  }
  return arrayCopy;
}

function makePlusFunction(a) {
  return function innerplus(b) {
    return a + b;
  }
}
