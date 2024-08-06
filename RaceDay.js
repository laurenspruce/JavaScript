let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
let runnerAge = 18;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18) {
  console.log(`This is your race number: ${raceNumber}. Your race will begin at 9:30am.`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`This is your race number: ${raceNumber}. Your race will begin at 11am.`);
} else if (runnerAge < 18) {
  console.log(`This is your race number: ${raceNumber}. Your race will begin at 12:30pm.`);
} else {
  console.log(`This is your race number: ${raceNumber}. Please head to the registation desk to be allocated.`);
}
