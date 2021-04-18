const alasql = require('alasql')

const file = "タスクリスト.xls"
const sheet = "タスク"
const range = "B5:G100"
alasql.promise(`SELECT * FROM XLS("${file}",{sheetid: "${sheet}", range: "${range}"}) WHERE [担当者] = "Bさん" AND [状況] = "完了"`)
  .then(res => {
    console.log(res);
  }).catch(err => {
    console.log(`${err}`);
  });

