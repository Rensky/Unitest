'use strict';


const countmoney = require('../lib/countmoney'); // 讀取要測試的 js 檔案


window.countbtn = function () { // 把 scope 提升到 windows， Dom 才能被指向

    const money = document.querySelector('#money').value; // 取得單價
    const item = document.querySelector('#item').value; // 取得數量
    if (countmoney(money, item) === false) { // 如果回傳值是false
        document.getElementById("total").innerHTML = ''; // 總計顯示空的
    } else {
        document.getElementById("total").innerHTML = countmoney(money, item); // 正常的話顯示金額
    }

}




