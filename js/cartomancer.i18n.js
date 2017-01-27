var LANG = -1;
var noprediction = "";
var riskof = "";

i18n.init({fallbackLng: false}, function () {
    $("#shuhfuhl").i18n();
    $("#kuht").i18n();
    $("#skater").i18n();
    $(".pridikshuhn").i18n();
    noprediction = $.t("noprediction");
    LANG = $.t("langgwij");
    riskof = $.t("riskof");
});