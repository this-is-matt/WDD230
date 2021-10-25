const temp = parseFloat(document.querySelector("span.temp").textContent);
const windSpd = parseFloat(document.querySelector("span.windSpd").textContent);
const windChill = document.querySelector("span.windChill");

const f =
  35.74 +
  0.6215 * temp -
  35.775 * Math.pow(windSpd, 0.16) +
  0.4275 * temp * Math.pow(windSpd, 0.16);

if ((temp < 50) && (windSpd > 10)) {
  windChill.textContent = f.toFixed(1) + "℉";
}
