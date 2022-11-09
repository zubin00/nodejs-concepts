


let firstPromise = new Promise((resolve, reject) => {
    setTimeout(function () {

        resolve('first promise')
    }, 1000)
});

let sndPromise = new Promise((resolve, reject) => {
    setTimeout(function () {

        resolve('2nd  promise')
    }, 1000)
});

let rejected_promise = new Promise((resolve, reject) => reject("Rejected Promise...."));
const all = Promise.all([firstPromise, sndPromise, rejected_promise])
try {
    const all = Promise.all([firstPromise, sndPromise, rejected_promise])
    all.then((data) => {
        console.log('this is for promise all', data);
    });   
} catch (e) {
    console.log(e)
}

const settleAll = Promise.allSettled([firstPromise, sndPromise, rejected_promise]);

settleAll.then((data) => {
    console.log('all settle ', data)
});


// the only difference between promise.all and promise.allSettled is 