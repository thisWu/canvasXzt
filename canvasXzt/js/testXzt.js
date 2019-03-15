/**
 * Created by 69023 on 2019-03-14.
 */
$(function () {
    let oThVal = "";  // 当前编辑的dom
    $('th').off('click').click(function (e) {
        let that = $(this),w = that.outerWidth(true),h = that.outerHeight(true),l = that.offset().left, t =that.offset().top,val = that.html()
        oThVal = that
        $("#popup .popup_content input").val(val);
        $("#background").show();
        $("#popup").show().css({'width':w+'px','height':h+"px",'top':t+'px','left':l+'px','overflow': 'hidden','transform': 'translate(0%,0%)'})
        setTimeout(function () {
            $("#popup").css({'width':'75%','height':"auto",'top':'50%','left':'50%','overflow': 'auto','transform': 'translate(-50%,-50%)'})
            $("#background").css("background","rgba(0,0,0,0.6)")
        },300);
    })
    //点击背景隐藏
    $('#background').off('click').click(function (e) {
        hidePopup ();
    })
    $("#popup .popup_btns li").off('click').click(function () {
        oThVal.html(parseFloat($("#popup .popup_content input").val()));
        hidePopup ();
        canvas ();
    })

    //弹框隐藏
    function hidePopup () {
        $("#background").css("background","rgba(0,0,0,0)")
        setTimeout(function () {
            $("#background").hide()
            $("#popup").hide()
        },300)
    }
    //线条渲染
    canvas ()
})