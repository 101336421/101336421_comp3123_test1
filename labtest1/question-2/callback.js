//Vaibhav Guliani
// 101336421
//Lab test - 1 (Answer2)

console.log("Vaibhav Guliani(101336421)")
console.log("Lab test - 1 (Answer2)")
console.log(" ")

const resolvedPromise = () => {
    const va = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let success={'message': "Delayed success!"};
            resolve(success );
        }, 500)
    })
    return va;
}
const rejectedPromise = () => {
    const gu = new Promise(function (resolve, reject) {
        setTimeout(() => {
            try{
                let fail={'error':'Delayed exception!'};
                reject(fail);
            }catch(e){
                console.error(e);
            }
        }, 500)
    })
    return gu ;
}

resolvedPromise()
    .then(result=>console.log(result))

rejectedPromise()
    .then(result=>console.log(result))
    .catch((error) => console.log(error));