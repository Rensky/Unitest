// 取得總和

var countmoney = function countmoney(num1, num2) {

    num1 = mathRound(num1); // 單價整理成四捨五入
    num2 = mathRound(num2); // 單價整理成四捨五入

    const money_sum = num1 * num2; // 金額計算

    const total_sum = mathRound(money_sum); // 應為 const 不能疊蓋，所以再宣告一個 四捨五入的新金額

    if (!num1 || !num2) { // 都沒有值的話
        return false;
    }

    if (isNaN(money_sum) === false) { // 是數字的話 請參照：https://www.w3schools.com/jsref/jsref_isnan.asp

        return total_sum;
    }

    if (Number.isInteger(money_sum)) { // 樹數字化的話 請參照：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

        return total_sum;
    }

    return false; // 其他條件都不過


}

module.exports = countmoney; // 封裝成 module

function mathRound(num) { // 四捨五入計算
    num = Math.round(num * 100) / 100;
    return num;
}

