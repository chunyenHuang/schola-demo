# Project 4
使用連接你的Express軟體與project 1 的表單。

## GetStarted
### 使用 [XMR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
XMLHttpRequest是AJAX的基礎，你將使用並對應到後端的restApi。之後在AngularJS裡面，我們會用類似的$http, $resource都是建立在這個觀念上。
```
function getStudents(){
    var XHR = new XMLHttpRequest();
    XHR.open('GET', '/students');
    XHR.onload = function(){
        console.log(XHR.status);
        var response = JSON.parse(XHR.responseText); // XHR.response
    }
    XHR.onerror = function(){
        ...
    }
    XHR.send();
}
```

## side project
### 練習使用 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```
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
        console.log(`sum=${result}`)
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

```
