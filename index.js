function findMatching(drivers, string) {
    return drivers.filter(function(driver) { // within drivers creates a function driver which filter() is used to return mathcing results
        return driver.toLowerCase() === string.toLowerCase(); // makes the driver search case insensitive
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.startsWith(string);
    })
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name === string;
    })
}
