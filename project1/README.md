# Your First Project
如果你已經熟悉HTML/CSS/Angular Material，可以跳過此練習～  

## GetStarted

1. 在你的github開啟一個新的repo，你可叫他任何名字～  
2. slack給我你的repo link  
3. 上傳你的檔案 [Github教學](http://gogojimmy.net/2012/01/17/how-to-use-git-1-git-basic/)  

## Goal
建立一個簡單的學生註冊單，需有下面的功能：  

1. 欄位項目與格式  
2. 送出欄位之後顯示結果  

## 檔案

1. form.html
2. form.js
3. form.css

## 註冊單格式
```
    {
        firstName: STRING,
        lastName: STRING,
        gender: STRING, (select from M/F),
        birthday: DATE,
        phones: [
            NUMBER, NUMBER...
        ],
        addresses: [
            {
                street: STRING,
                city: STRING,
                state: STRING, (select)
                zipCode: NUMBER
            },
            ...
        ]
    }
```

## Approach
1. HTML5 / CSS  
    可使用任何library, Angular Material, Bootstrap...  
2. Javascript  
    可使用純Javascript或是任何library如jQuery等...  

## Note
1. 不需要做得太花俏，有功能可以使用即可。   
2. 不要偷用任何別人寫好的東西！一步一腳印～慢慢來比較快
