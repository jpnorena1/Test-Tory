function whoIsOnCall(pStartDate, pDate, pPattern, pGroup) {
  if (pDate < pStartDate) {
    return 'Error: pDate should be greater than or equal to pStartDate';
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const daysPassed = Math.floor((pDate - pStartDate) / msPerDay);

  let totalDays = 0;
  let i = 0;

  while (totalDays <= daysPassed) {
    totalDays += pPattern[i % pPattern.length];
    i++;
  }

  i--;

  const duty = i === pPattern.length - 1 ? 'On duty' : 'On call';
  return `${pDate.toLocaleDateString('en-US')} ${duty}: ${pGroup[i % pGroup.length]}`;
}

const vStartDate = new Date(2021, 7, 16);
const myPattern = [2, 2, 3];
const myGroup = ['Max', 'Paula', 'Roger', 'Daniela'];

const vTestDateArr = [
  new Date(2021, 7, 16),
  new Date(2021, 7, 23),
  new Date(2021, 7, 28),
  new Date(2021, 8, 8),
  new Date(2021, 8, 12),
];

for (const testDate of vTestDateArr) {
  console.log(whoIsOnCall(vStartDate, testDate, myPattern, myGroup));
}