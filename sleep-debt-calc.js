const getSleepHours = day => {
 if (day === 'monday') {
   return 10;
 }else if (day === 'tuesday') {
   return 3;
 }else if (day === 'wednesday'){
   return 6;
 }else if (day === 'thursday') {
   return 10;
 }else if (day === 'friday'){
   return 10;
 }else if (day === 'saturday'){
   return 10;
 }else if (day === 'sunday'){
   return 7;
 } else {
   return 'Error!';
 }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + 
  getSleepHours('tuesday')+ 
  getSleepHours('wednesday')+
  getSleepHours('thursday')+ 
  getSleepHours('friday')+       
  getSleepHours('saturday')+ 
  getSleepHours('sunday');
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}

  else if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep';
  } else if (actualSleepHours > idealSleepHours) {
    return 'You got more sleep than needed';
  }else if(actualSleepHours < idealSleepHours) {
    return 'You should get some rest';
  } else {
    return 'Error!'
  }
};

console.log(calculateSleepDebt());


