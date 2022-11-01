"use strict";

import xlsx from 'xlsx';

const workbook = xlsx.readFile('xlsx-data/test-data-01.xlsx');

const sheet_name_list = workbook.SheetNames

console.log("■シート名")
sheet_name_list.forEach(sheet_name => console.log(sheet_name));

const Sheet1          = workbook.Sheets[sheet_name_list[0]]  // シート1をデータを取得します
const Sheet1_json     = xlsx.utils.sheet_to_json( Sheet1 )   // シート1のデータをJSONパースします

console.log("■１シート目の内容JSON");
// 通常は1行目がヘッダ行となる。{header: 1} を指定で配列形式となる。
console.log(Sheet1_json);

// (例)シート1のセルA1の値をコンソールに出力します
const Sheet1A1 = Sheet1['A1'].v;

console.log(`■シート1のセルA1の値：`);
console.log(Sheet1A1);


