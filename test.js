const first = (input)=>{
    return new Promise((resolve, reject)=>{
        console.log('first');
        resolve(input);
    });
}
const second = (input) =>{
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          console.log('second');
          input = input + 2;
          resolve(input);
      },1000);
  });
}
const third = (input) =>{
    console.log('third');
    input = input + 3;
    return Promise.resolve(input);
}

// call together
first();
second();
third();

// call in chain,
first(1)
    .then((result)=>{
        return second(result);
    })
    .then((result)=>{
        return third(result);
    })
    .then((result)=>{
        console.log(`sum: ${result}`)
    })
    .catch((err)=>{
      console.log(err);
    });

// call with promise all
Promise
    .all([first(), second(), third()])
    .then((results)=>{
        console.log(results);
    })
    .catch((err)=>{
      console.log(err);
    });
