function convert() {
  const temperature = document.getElementById("temperature").value;
  const unit = document.getElementById("unit").value;
  let result;

  if (unit === "celsius") {
    result = temperature * 1.8 + 32;
    document.getElementById("result").innerHTML = `${result}°F`;
  } else if (unit === "fahrenheit") {
    result = (temperature - 32) / 1.8;
    document.getElementById("result").innerHTML = `${result}°C`;
  } else if (unit === "kelvin") {
    result = temperature - 273.15;
    document.getElementById("result").innerHTML = `${result}°C`;
  }
}
