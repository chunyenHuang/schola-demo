# Project 3
建立一個簡單的Express Server配合上 MongoDB。

## GetStarted

### 使用 [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
建立兩個collections - students & classes
```
// db.collections('students')
[
    {
        _id: ObjectId('000000000000'),
        firstName: 'John',
        lastName: 'Huang'
    }
]

// db.collections('classes')
[
    {
        _id: ObjectId(),
        className: 'My class'
        student_ids: [
            ObjectId('000000000000')
        ]
    }
]
```

### 使用[$lookup](https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/)連結兩個Collections
aggregation 可以讓你在搜尋students的時候同時搜尋相關的collections，有點類似left-join。

### 拆解你的[Express Router](https://expressjs.com/en/guide/routing.html)
請參考 [Demo]()
