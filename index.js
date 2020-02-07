let promiseToCleanTheRoom = new Promise((resolve, reject) => {

    // Cleaning the room

    let isClean = false

    if (isClean) {
        resolve('clean')
    } else {
        reject('not clean')
    }

})

promiseToCleanTheRoom.then((fromResolve) => {
    console.log(`The room is ${fromResolve}.`)
}).catch((fromReject) => {
    console.log(`The room is ${fromReject}.`)
})