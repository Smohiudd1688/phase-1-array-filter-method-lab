// Code your solution here

function findMatching(driversArray, driverName) {
    return driversArray.filter(function (name) {
        return (driverName.toUpperCase() === name.toUpperCase());
    });
}

function fuzzyMatch(driversArray, letters) {
    const areLettersEqual = name => {
        const size = letters.length;
        const tempName = name.slice(0, size);
        return (letters === tempName);
    };

    return driversArray.filter(areLettersEqual);
}

function matchName (driversArray, driverName) {
    function isNameEqual (driver) {
        if (driver.name === driverName) {
            return true;
        } else {
            return false;
        }
    }

    return driversArray.filter(isNameEqual);
}