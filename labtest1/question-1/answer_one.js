//Vaibhav Guliani
// 101336421
//Lab test - 1 (Answer1)

console.log("Vaibhav Guliani(101336421)")
console.log("Lab test - 1 (Answer1)")
console.log(" ")


const lowerCaseWord = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            const fillterArrayWithString = mixedArray.filter(
                (eachArray) => typeof eachArray === "string"
            );
            const lowercasestring = fillterArrayWithString.map(
                (eachItemOfFilterArray) => eachItemOfFilterArray.toLowerCase()
            );
            resolve(lowercasestring);
        } else {
            reject("Array is not valid");
        }
    });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "WINGS"];
lowerCaseWord(mixedArray)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));