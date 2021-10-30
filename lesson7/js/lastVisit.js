// need Current time
// need if to det. if first visit or last visit
//f to do calculation
//f to update local storage
//const to det. mil to day conversion

const now = new Date.now();
const milToDay = 86400000;

// try{
    const lastDate = localStorage.getItem('lastDate');
// }
// catch(er) {

// }

if( lastDate == ''){
    localStorage.setItem('lastDate', now);
    document.querySelector('lastVisit') = "Looks like this is your first time visiting. Thanks for coming!";
} else{
    const dateDiff = (now - lastDate)/ milToDay;
    /*get rid of this ->*/ console.log(dateDiff);
    document.querySelector('lastVisit') = `looks like it has been ${dateDiff.toFixed(2)} days since you have visited our site.`;
}

d