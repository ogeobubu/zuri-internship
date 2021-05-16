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
    return console.log(`${Math.floor(calculation)}°C`);
  }
};

convertFahrToCelsius(100);

const checkYuGiOh = (n) => {
  const array = [];

  for (let i = 1; i <= n; i++) {
    array.push(i);

    if (i === 10) {
      array[10] = "yu-oh";
    } else if (i == 30) {
      array[30] = "yu-gi-oh";
    }
  }

  array[1] = "yu";
  array[2] = "gi";
  array[3] = "yu";
  array[4] = "oh";
  array[5] = "yu-gi";
  console.log(array);
};

checkYuGiOh(5);
