var cartomancer = (function () {

    var LANG = -1;
    var noprediction = "";
    var deck = cartomancer_data.deck;
    var variavel;

    i18n.init({fallbackLng: false}, function () {
        $("#shuhfuhl").i18n();
        $("#kuht").i18n();
        $("#skater").i18n();
        $(".pridikshuhn").i18n();
        noprediction = $.t("noprediction");
        LANG = $.t("langgwij");
        riskof = $.t("riskof");
    });

    function Word(token, relative_meaning) {
        this.token = token;
        this.relative_meaning = relative_meaning;
    }

    var ace4 = new Word('aceaceaceace', ['Announces danger, failure in business and sometimes imprisonment.', 'Anuncia perigo, fracasso nos negócios e, por vezes, a prisão.']);
    var ace3 = new Word('aceaceace', ['Signify good tidings.', 'Significa boas notícias.']);
    var ace2 = new Word('aceace', ['A plot.', 'Uma conspiração.']);
    var king4 = new Word('kingkingkingking', ['A consultation on important business, the result of which will be highly satisfactory.', 'Uma consulta sobre assuntos importantes, cujo resultado será altamente satisfatório.']);
    var king2 = new Word('kingking', ['A partnership in business. Sometimes this only denotes friendly projects.', 'Uma parceria em negócios. Às vezes isto só denota projetos amigáveis.']);
    var queen4 = new Word('queenqueenqueenqueen', ['Company, society.', 'Companhia, sociedade.']);
    var queen3 = new Word('queenqueenqueen', ['Friendly calls.', 'Chamadas amigáveis.']);
    var queen2 = new Word('queenqueen', ['A meeting between friends.', 'Um encontro entre amigos.']);
    var jack4 = new Word('jackjackjackjack', ['A noisy party, mostly young people.', 'Uma festa barulhenta, principalmente jovens.']);
    var jack3 = new Word('jackjackjack', ['False friends.', 'Falsos amigos.']);
    var jack2 = new Word('jackjack', ['Evil intentions.', 'Más intenções.']);
    var ten4 = new Word('tentententen', ['Great success in projected enterprises.', 'Grande sucesso em empreendimentos planejados.']);
    var ten3 = new Word('tententen', ['Improper conduct.', 'Conduta imprópria.']);
    var ten2 = new Word('tenten', ['Change of trade or profession.', 'Mudança de ofício ou profissão.']);
    var nine4 = new Word('ninenineninenine', ['A great surprise.', 'Uma grande surpresa.']);
    var nine3 = new Word('nineninenine', ['Joy, fortune, health.', 'Alegria, fortuna, saúde.']);
    var nine2 = new Word('ninenine', ['A little gain.', 'Um pequeno ganho.']);
    var eight4 = new Word('eighteighteighteight', ['A short journey.', 'Uma curta viagem.']);
    var eight3 = new Word('eighteighteight', ['Thoughts of marriage.', 'Pensamentos de casamento.']);
    var eight2 = new Word('eighteight', ['A brief love-dream.', 'Um breve sonho de amor.']);
    var seven4 = new Word('sevensevensevenseven', ['Intrigues among servants or low people, threats, snares and disputes.', 'Intrigas entre funcionários ou pessoas de baixo escalão, ameaças, armadilhas e disputas.']);
    var seven3 = new Word('sevensevenseven', ['Sickness, premature old age.', 'Doença, velhice prematura.']);
    var seven2 = new Word('sevenseven', ['Levity.', 'Leviandade.']);

    var shuffle = function () {
        clearBoard();
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        $('#btshuffle').prop('disabled', true);
        $('#btcut3').prop('disabled', false);
        $("#myModalLabel").css("visibility", "hidden");
        $(".modal-body").html("<img src='img/loadingBar.gif'>");
        $('#infoModal').modal({
            show: true
        });
        window.setTimeout(function () {
            $('#infoModal').modal('hide');
        }, 4000);
    };

    var cut3times = function () {
        var cut1 = deck.slice(0, 17);
        var cut2 = deck.slice(17, 34);
        var cut3 = deck.slice(34, deck.length);
        deck.length = 0;
        deck = cut2.concat(cut3, cut1);
        $('#btcut3').prop('disabled', true);
        $('#btlayout').removeClass('hidden');
        $('#btlayout').prop('disabled', false);
        $("#myModalLabel").css("visibility", "hidden");
        $(".modal-body").html("<img src='img/loadingBar.gif'>");
        $('#infoModal').modal({
            show: true
        });
        window.setTimeout(function () {
            $('#infoModal').modal('hide');
        }, 2000);
    };

    var clearBoard = function () {
        $('.rm-img').remove();
        $(".btinfo-hidden").css("visibility", "hidden");
    };

    var fillTable = function () {
        var teybuhl = new Array(new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(7));
        var count = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < teybuhl[i].length; j++) {
                teybuhl[i][j] = deck[count];
                count++;
            }
        }
        return teybuhl;
    };

    var layThemOut = function () {
        $("#myModalLabel").css("visibility", "visible");
        var teybuhl = fillTable();
        var risk = risk_of_imprisonment(teybuhl);
        var relative_meanings = fillRelativeMeanings(createTokens(teybuhl));
        if (relative_meanings[0] === "" &&
                relative_meanings[1] === "" &&
                relative_meanings[2] === "" &&
                relative_meanings[3] === "" &&
                relative_meanings[4] === "" &&
                relative_meanings[5] === "" &&
                risk[0] === false &&
                risk[1] === false &&
                risk[2] === false &&
                risk[3] === false &&
                risk[4] === false &&
                risk[5] === false) {
            $('.modal-body').html(noprediction);
            $('#infoModal').modal({
                show: true
            });
        }
        var count = 1;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < teybuhl[i].length; j++) {
                var img = document.createElement("img");
                img.src = teybuhl[i][j].img;
                img.width = 50;
                img.height = 62.5;
                img.setAttribute('class', 'rm-img');
                img.setAttribute('title', teybuhl[i][j].individual_meaning[LANG]);
                var roh = '#card'.concat(count.toString());
                document.querySelector(roh).appendChild(img);
                count++;
            }
        }

        $(document).on("click", "#btlayout", function () {
            $("#board").removeClass("hidden");
        });


        if (risk[0]) {
            $("#btrisk1").css("visibility", "visible");
        } else {
            $("#btrisk1").css("visibility", "hidden");
        }
        if (risk[1]) {
            $("#btrisk2").css("visibility", "visible");
        } else {
            $("#btrisk2").css("visibility", "hidden");
        }
        if (risk[2]) {
            $("#btrisk3").css("visibility", "visible");
        } else {
            $("#btrisk3").css("visibility", "hidden");
        }
        if (risk[3]) {
            $("#btrisk4").css("visibility", "visible");
        } else {
            $("#btrisk4").css("visibility", "hidden");
        }
        if (risk[4]) {
            $("#btrisk5").css("visibility", "visible");
        } else {
            $("#btrisk5").css("visibility", "hidden");
        }
        if (risk[5]) {
            $("#btrisk6").css("visibility", "visible");
        } else {
            $("#btrisk6").css("visibility", "hidden");
        }

        $(document).on("click", "#btrisk1", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk2", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk3", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk4", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk5", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk6", function () {
            $(".modal-body").html(riskof);
        });


        if (relative_meanings[0].length === 0) {
            $("#btinfo1").css("visibility", "hidden");
        } else {
            $("#btinfo1").css("visibility", "visible");
        }
        if (relative_meanings[1].length === 0) {
            $("#btinfo2").css("visibility", "hidden");
        } else {
            $("#btinfo2").css("visibility", "visible");
        }
        if (relative_meanings[2].length === 0) {
            $("#btinfo3").css("visibility", "hidden");
        } else {
            $("#btinfo3").css("visibility", "visible");
        }
        if (relative_meanings[3].length === 0) {
            $("#btinfo4").css("visibility", "hidden");
        } else {
            $("#btinfo4").css("visibility", "visible");
        }
        if (relative_meanings[4].length === 0) {
            $("#btinfo5").css("visibility", "hidden");
        } else {
            $("#btinfo5").css("visibility", "visible");
        }
        if (relative_meanings[5].length === 0) {
            $("#btinfo6").css("visibility", "hidden");
        } else {
            $("#btinfo6").css("visibility", "visible");
        }

        $(document).on("click", "#btinfo1", function () {
            $(".modal-body").html(relative_meanings[0]);
        });

        $(document).on("click", "#btinfo2", function () {
            $(".modal-body").html(relative_meanings[1]);
        });

        $(document).on("click", "#btinfo3", function () {
            $(".modal-body").html(relative_meanings[2]);
        });

        $(document).on("click", "#btinfo4", function () {
            $(".modal-body").html(relative_meanings[3]);
        });

        $(document).on("click", "#btinfo5", function () {
            $(".modal-body").html(relative_meanings[4]);
        });

        $(document).on("click", "#btinfo6", function () {
            $(".modal-body").html(relative_meanings[5]);
        });

        $('#btlayout').addClass('hidden');
        $('#btshuffle').prop('disabled', false);

    };

    var risk_of_imprisonment = function (teybuhl) {
        var tokens = new Array(6);
        for (var i = 0; i < tokens.length; i++) {
            tokens[i] = false;
        }
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < teybuhl[row].length; column++) {
                if (teybuhl[row][column].name === "king" ||
                        teybuhl[row][column].name === "queen" ||
                        teybuhl[row][column].name === "jack") {
                    if (teybuhl[row][column - 1] !== undefined &&
                            teybuhl[row][column + 1] !== undefined &&
                            teybuhl[row][column - 1].name !== "king" &&
                            teybuhl[row][column - 1].name !== "queen" &&
                            teybuhl[row][column - 1].name !== "jack" &&
                            teybuhl[row][column - 1].name === teybuhl[row][column + 1].name) {
                        tokens[row] = true;
                    }

                }
            }
        }
        return tokens;
    };

    var createTokens = function (teybuhl) {
        var tokens = new Array(6);
        for (var i = 0; i < tokens.length; i++) {
            tokens[i] = "";
        }
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < teybuhl[row].length; column++) {
                var name_tmp = teybuhl[row][column].name;
                var tokens_temp = tokens[row];
                if (name_tmp === tokens_temp.substr(tokens_temp.length - name_tmp.length)) {
                    tokens[row] += teybuhl[row][column].name;
                } else {
                    tokens[row] += " " + teybuhl[row][column].name;
                }
            }
        }
        return tokens;
    };

    var fillRelativeMeanings = function (tokens) {
        var relative_meanings = [6];
        for (var x = 0; x < tokens.length; x++) {
            relative_meanings[x] = "";
        }
        for (var i = 0; i < tokens.length; i++) {
            var wordz = tokens[i].split(" ");
            for (var j = 0; j < wordz.length; j++) {
                switch (wordz[j]) {
                    case ace4.token :
                        relative_meanings[i] += " " + ace4.relative_meaning[LANG];
                        break;
                    case ace3.token :
                        relative_meanings[i] += " " + ace3.relative_meaning[LANG];
                        break;
                    case ace2.token :
                        relative_meanings[i] += " " + ace2.relative_meaning[LANG];
                        break;
                    case king4.token :
                        relative_meanings[i] += " " + king4.relative_meaning[LANG];
                        break;
                    case king2.token :
                        relative_meanings[i] += " " + king2.relative_meaning[LANG];
                        break;
                    case queen4.token :
                        relative_meanings[i] += " " + queen4.relative_meaning[LANG];
                        break;
                    case queen3.token :
                        relative_meanings[i] += " " + queen3.relative_meaning[LANG];
                        break;
                    case queen2.token :
                        relative_meanings[i] += " " + queen2.relative_meaning[LANG];
                        break;
                    case jack4.token :
                        relative_meanings[i] += " " + jack4.relative_meaning[LANG];
                        break;
                    case jack3.token :
                        relative_meanings[i] += " " + jack3.relative_meaning[LANG];
                        break;
                    case jack2.token :
                        relative_meanings[i] += " " + jack2.relative_meaning[LANG];
                        break;
                    case ten4.token :
                        relative_meanings[i] += " " + ten4.relative_meaning[LANG];
                        break;
                    case ten3.token :
                        relative_meanings[i] += " " + ten3.relative_meaning[LANG];
                        break;
                    case ten2.token :
                        relative_meanings[i] += " " + ten2.relative_meaning[LANG];
                        break;
                    case nine4.token :
                        relative_meanings[i] += " " + nine4.relative_meaning[LANG];
                        break;
                    case nine3.token :
                        relative_meanings[i] += " " + nine3.relative_meaning[LANG];
                        break;
                    case nine2.token :
                        relative_meanings[i] += " " + nine2.relative_meaning[LANG];
                        break;
                    case eight4.token :
                        relative_meanings[i] += " " + eight4.relative_meaning[LANG];
                        break;
                    case eight3.token :
                        relative_meanings[i] += " " + eight3.relative_meaning[LANG];
                        break;
                    case eight2.token :
                        relative_meanings[i] += " " + eight2.relative_meaning[LANG];
                        break;
                    case seven4.token :
                        relative_meanings[i] += " " + seven4.relative_meaning[LANG];
                        break;
                    case seven3.token :
                        relative_meanings[i] += " " + seven3.relative_meaning[LANG];
                        break;
                    case seven2.token :
                        relative_meanings[i] += " " + seven2.relative_meaning[LANG];
                        break;
                }
            }
        }
        return relative_meanings;
    };

    $('#btcut3, #btlayout').prop('disabled', true);

    return {
        shuffle: shuffle,
        cut3times: cut3times,
        layThemOut: layThemOut
    };

}());


