const now = Date.now();
const milToDay = 86400000;
const lastVisit = document.querySelector("p.lastVisit");
let localStorageDate;


if (localStorage.length > 0) {
  localStorageDate = parseFloat(localStorage.getItem("lastDate"));
  const dateDiff = (now - localStorageDate) / milToDay;
  lastVisit.textContent = `Looks like it has been ${dateDiff.toFixed(5)} days since you have visited our site.`;
  localStorage.setItem("lastDate", now);
} else {
  localStorage.setItem("lastDate", now);
  lastVisit.textContent =
    "Looks like this is your first time visiting. Thanks for coming!";
}
