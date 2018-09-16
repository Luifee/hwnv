<!-- Original:  Dio - 天馬行空-程式館 (https://linlong3388.wordpress.com/) -->
//再次感謝偉大的原作者，初學者只能從拾人牙慧開始

$(function() {
    $("#birth").datepicker({
        dateFormat: "yy/mm/dd",
        yearRange: "-150:+0",
        changeMonth: true,
        changeYear: true,
        autoSize: true,
        maxDate: "+0",
    });

    //以下大半是自己寫的，所以蠢到炸（艸）
    $("#birth").change(function() {
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth();
        var d = today.getDate();
        var td = (y * 10000 + m * 100 + d);
        var btdi = $("#birth").datepicker("getDate");
        var by = btdi.getFullYear();
        var bm = btdi.getMonth();
        var bd = btdi.getDate();
        var btd = (by * 10000 + bm * 100 + bd);
        var yso = Math.floor((td - btd) / 10000);
        document.calage.age.value = yso + "歲";
        if (yso < 18) {
            window.location.replace("http://www.disney.com.tw/")};
    });
});