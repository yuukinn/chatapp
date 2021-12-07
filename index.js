//テンプレート文字列

const name = "yuuki";
const age = 22;

//私の名前はyuukiです。年齢は22歳です。

//現在の方法
const message1= `私の名前は${name}です。年齢は${age}です。`;
console.log(message1)

//アロー関数

//従来の関数
// function func1(str) {
//     return str;
// }
const func1 = function(str) {
    return str
}
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
   return str;

}
console.log(func2('func2です'))

//引数一つの場合
const func2 = str => {
    return str;
 }