<!-- Original:  Dev Pragad (devpragad@yahoo.com) -->
<!-- Web Site:  http://www.geocities.com/devpragad -->
<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->
//感謝偉大的原作者，光是修改內容就快讓我去了半條命

//定義表單中之欄位初始值
function start() {
    document.form1.day.value = "16";
    document.form1.month.value = "7";
    document.form1.year.value = "1990";
    document.form1.age.value = "計算結果";
}
//抓取及定義目前日期
days = new Date();
gdate = days.getDate();
gmonth = days.getMonth();
gyear = days.getFullYear();

//判斷出生年月日是否合理
function run() {
    dd = document.form1.day.value;
    mm = document.form1.month.value;
    yy = document.form1.year.value;
    main = "valid";
    //年月日不得空白、年不能<0(原因不明)、月不得<1或>12、日不得<1或>31、出生年月日不得晚於今日
    if ((yy == "") || (mm == "") || (dd == "") || (yy < 0) || (mm < 1) || (mm > 12) || (dd < 1) || (dd > 31) || (yy > gyear) || ((yy == gyear) && (mm > gmonth + 1)) || ((yy == gyear) && (mm == gmonth + 1) && (dd > gdate)))
        main = "Invalid";
    else
        //小月之日不得>30
        if (((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) && (dd > 30))
            main = "Invalid";
        else
            //2月之日不得>29
            if (mm == 2) {
                if (dd > 29)
                    main = "Invalid";
                //逢閏年，2月之日才可>28
                else if ((dd > 28) && (!lyear(yy)))
                    main = "Invalid";
            } else
                main = main;
    //若輸入之日期合理，則進行計算
    if (main == "valid") {
        //年差=目前年-出生年
        aget = gyear - yy;
        //若生日過了，年齡=年差
        if (((mm == (gmonth + 1)) && (dd <= gdate)) || (mm <= (gmonth))) {
            age = aget;
            //否則年齡 = 年差 - 1
        } else {
            age = aget - 1;
        }
        document.form1.age.value = "您的年齡是：" + age + "歲 ";
        //觸發未滿18前往Disney
        if (age < 18) {
            window.location.replace("http://www.disney.com.tw/")
        }
        //若輸入之日期不合理，則顯示錯誤訊息
    } else {
        document.form1.age.value = "日期輸入錯誤";
    }
    //閏年計算公式
    function lyear(a) {
        if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)) return true;
        else return false;
    }
}