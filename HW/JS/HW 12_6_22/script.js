function getVal(obj, path) {
  let seg = path.split(".");
  if (seg.length == 1) {
    return obj[seg[0]];
  } else if (seg.length == 0) {
    return null;
  } else {
    return getVal(obj[seg[0]], seg.slice(1).join("."));
  }
}
function setVal(obj, path, value) {
  let seg = path.split(".");
  if (seg.length == 1) {
    obj[seg[0]] = value;
    return obj;
  } else if (seg.length == 0) {
    return null;
  } else {
    return setVal(obj[seg[0]], seg.slice(1).join("."), value);
  }
}

function getValReduce(obj, path) {
  let seg = path.split(".");
  return seg.reduce((value, current) => {
    return value[current];
  }, obj);
}
function setValReduce(obj, path, valueReduce) {
  let seg = path.split(".");
  return seg.reduce((value, current, index) => {
    if (index == seg.length - 1) {
      return (value[current] = valueReduce);
    } else {
      return value[current];
    }
  }, obj);
}

let obj = {
  age: 57,
  color: "purple",
  isHubgry: true,
  friends: ["Itzhak", "David", { name: "shmulik" }],
  pet: {
    name: "Rusty",
    species: "Dog",
    age: 2,
  },
};

// HW
getVal(obj, "pet.name"); // => "Rusty"
getVal(obj, "friends.0"); // => "Itzhak"
getVal(obj, "friends.2.name"); // => "shmulik"
// HW
setVal(obj, "pet.name", "Dogly"); // => {...pet:{name:"Dogly" }}

function factorialRec(a) {
  if (a == 1) {
    return 1;
  } else {
    return a * factorialRec(--a);
  }
}

function fibonacciRec(a) {
  if (a <= 1) {
    return 1;
  } else {
    //Fn = Fn-1 + Fn-2
    return fibonacciRec(a - 1) + fibonacciRec(a - 2);
  }
}

let p1 = {
  x: 1,
  y: 2,
};

let p2 = {
  x: 3,
  y: 4,
};
// HW
let result = calculateRecArea(p1, p2);
function calculateRecArea(p1, p2) {
  let width = p1.x - p2.x;
  let height = p1.y - p2.y;
  let area = Math.abs(width * height);
  return area;
}

function length(a){
  if(a == ""){
    return 0;
  }
  else{
    return length(a.slice(0,-1))+1;
  }
}
