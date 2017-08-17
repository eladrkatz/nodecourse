


function doSomethingLong(cb) {
    setTimeout(cb, 2000);
}

function doSomethingLong2() {
    return new Promise((resolve, reject) => {

        reject('some');
        setTimeout(() => resolve(100), 2000);

    });
}

doSomethingLong2().then(() =>{
    doSomethingLong2().then(() => {
        doSomethingLong2()
    });
});


// doSomethingLong((err) => {

//     console.log('finish 1');
//     doSomethingLong(() => {
//         console.log('2');
//         doSomethingLong(() => {
//             console.log('3');
//         });
//     });
// });



function resolveAfter3Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 3000);
  });
}

async function add1(x) {
  var a = resolveAfter3Seconds(20);
  var b = resolveAfter3Seconds(30);
  return x + await a + await b;
}

