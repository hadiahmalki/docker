function findAverage(numOfPlans, numOfUsers) {
  if (typeof numOfPlans !== 'number' || typeof numOfUsers !== 'number') throw new TypeError()
  if (numOfUsers <= 0) return 0
  return numOfPlans / numOfUsers
}

module.exports = findAverage
