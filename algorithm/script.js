const convertFahrToCelsius = (value) => {
  if (
    Object.prototype.toString.call(value).slice(8, -1).toLowerCase() !==
    "number"
  ) {
    const errorMessage = `${value} is not a valid number but a/an ${Object.prototype.toString
      .call(value)
      .slice(8, -1)
      .toLowerCase()}'s type.`;
    return console.log(errorMessage);
  } else {
    const calculation = (value - 32) * (5 / 9);
    return console.log(`${Math.floor(calculation)}`);
  }
};

convertFahrToCelsius(100);

const checkYuGiOh = (n) => {
  if (
    Object.prototype.toString.call(n).slice(8, -1).toLowerCase() !== "number"
  ) {
    return console.log("invalid parameter:", n);
  } else {
    const array = [];

    for (let i = 1; i <= n; i++) {
      array.push(i);
      if (i % 2 === 0) {
        array.push("yu");
      } else if (i % 3 === 0) {
        array.push("gi");
      } else if (i % 5 === 0) {
        array.push("oh");
      }
    }
    console.log(array);
  }
};

checkYuGiOh(10);
