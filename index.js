// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function(driver) {
    return driver.revenue > revenue
  })//end of filter
}//end of driversWithRevenueOver

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function(driver) {
    return driver.name
  })//end of map
}// end of driverNamesWithRevenueOver

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(attribute)] === attribute[Object.keys(attribute)]
  })//end of filter
}//end of exactMatch

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver) {
    return driver.name
  })//end of map
}//end of exactMatchToList
