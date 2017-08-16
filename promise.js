




function doSomethingLong(cb) {
    setTimeout(cb, 2000);
}

function doSomethingPromisified() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
}



doSomethingLong(() => {
    console.log('finishedFirst');
});


doSomethingPromisified().then(() => {
    console.log('finishedSecond');
});


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


add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});


