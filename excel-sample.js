const alasql = require('alasql')

const file = "サンプル資料.xls"
const sheet = "SheetZ" // 日本語に
const range = "B5:I100"
alasql.promise('SELECT * FROM XLS("サンプル資料.xls",{sheetid: "SheetZ", range: "B5:I100"}) WHERE [担当者] = "Bさん" AND [状況] = "完了"')
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.log(`${err}`);
  });

