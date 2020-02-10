/**** EXAMPLE #1 ****/

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


/**** EXAMPLE #2 ****/

let cleanRoom = () => {
    return new Promise((resolve, reject) => {
        resolve('Cleaned The Room')
    })
}

let removeGarbage = message => {
    return new Promise((resolve, reject) => {
        resolve(`${message} Removed Garbage`)
    })
}

let winIcecream = message => {
    return new Promise((resolve, reject) => {
        resolve(`${message} Won Icecream`)
    })
}

cleanRoom()
    .then((result) => removeGarbage(result))
    .then((result) => winIcecream(result))
    .then((result) => console.log(`Finished ${result}`))

Promise.all([cleanRoom(), removeGarbage(), winIcecream()])
    .then(() => console.log('All Finished'))

Promise.race([cleanRoom(), removeGarbage(), winIcecream()])
    .then(() => console.log('One Finished'))