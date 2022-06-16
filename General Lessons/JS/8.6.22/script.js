function person(gender) {
  return function getGender(height) {
    return function getHeigh(name) {
      var isHigh = height > 170;
      console.log(`${name} is a nice, ${isHigh?"tall" : "short"} ${gender}`);
    };
  };
}

var getGender = person("Male");
var getHeigh = getGender(180);

console.log(getHeigh("John")); // John is a a nice, tall dude;
console.log(getHeigh("David")); // David is a a nice, tall dude;

var getHeigh = getGender(160);
console.log(getHeigh("John")); // John is a a nice, short dude;

var getGender = person("Female");
var getHeigh = getGender(180);

console.log(getHeigh("Bela")); // Bela is a a nice, tall lady;
