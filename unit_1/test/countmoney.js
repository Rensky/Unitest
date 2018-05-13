const should = require('should'); // should 是描述測試內容顯示的
const countmoney = require('../lib/countmoney'); // 讀取要測試的 js 檔案


describe('價格加總', function () {

    it('帶入正常的數字', done => {
        const count_money = countmoney(20, 30);
        count_money.should.be.Number(); // 必須是數字
        done();
    });

    it('帶入小數點', done => {
        const count_money = countmoney(20.3, 30.2);
        count_money.should.be.Number(); // 必須是數字
        done();
    });

    it('只輸入一個值', done => {
        const count_money = countmoney(333);
        count_money.should.equal(false); //equal 用法是 "==="" 的意思
        done();
    });

    it('帶入空值', done => {
        const count_money = countmoney();
        count_money.should.equal(false); //equal 用法是 "==="" 的意思
        done();
    });

    it('帶入字串', done => {
        const count_money = countmoney('嗨嗨你好', '222');
        count_money.should.equal(false); //equal 用法是 "==="" 的意思
        done();
    });

    it('帶入陣列', done => {
        const count_money = countmoney([4, 3], [555]);
        count_money.should.equal(false); //equal 用法是 "==="" 的意思
        done();
    });

    it('帶入 boolean 值', done => {
        const count_money = countmoney(true, false);
        count_money.should.equal(false); //equal 用法是 "==="" 的意思
        done();
    });

});