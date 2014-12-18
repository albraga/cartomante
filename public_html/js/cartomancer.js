(function () {

    var deck = cartomancer.data.deck;

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
        $(".modal-body").html("<img src='img/build/loadingBar.gif'>");
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
        $(".modal-body").html("<img src='img/build/loadingBar.gif'>");
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
                    case cartomancer.data.ace4.token :
                        relative_meanings[i] += " " + cartomancer.data.ace4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ace3.token :
                        relative_meanings[i] += " " + cartomancer.data.ace3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ace2.token :
                        relative_meanings[i] += " " + cartomancer.data.ace2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.king4.token :
                        relative_meanings[i] += " " + cartomancer.data.king4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.king2.token :
                        relative_meanings[i] += " " + cartomancer.data.king2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.queen4.token :
                        relative_meanings[i] += " " + cartomancer.data.queen4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.queen3.token :
                        relative_meanings[i] += " " + cartomancer.data.queen3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.queen2.token :
                        relative_meanings[i] += " " + cartomancer.data.queen2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.jack4.token :
                        relative_meanings[i] += " " + cartomancer.data.jack4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.jack3.token :
                        relative_meanings[i] += " " + cartomancer.data.jack3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.jack2.token :
                        relative_meanings[i] += " " + cartomancer.data.jack2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ten4.token :
                        relative_meanings[i] += " " + cartomancer.data.ten4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ten3.token :
                        relative_meanings[i] += " " + cartomancer.data.ten3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ten2.token :
                        relative_meanings[i] += " " + cartomancer.data.ten2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.nine4.token :
                        relative_meanings[i] += " " + cartomancer.data.nine4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.nine3.token :
                        relative_meanings[i] += " " + cartomancer.data.nine3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.nine2.token :
                        relative_meanings[i] += " " + cartomancer.data.nine2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.eight4.token :
                        relative_meanings[i] += " " + cartomancer.data.eight4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.eight3.token :
                        relative_meanings[i] += " " + cartomancer.data.eight3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.eight2.token :
                        relative_meanings[i] += " " + cartomancer.data.eight2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.seven4.token :
                        relative_meanings[i] += " " + cartomancer.data.seven4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.seven3.token :
                        relative_meanings[i] += " " + cartomancer.data.seven3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.seven2.token :
                        relative_meanings[i] += " " + cartomancer.data.seven2.relative_meaning[LANG];
                        break;
                }
            }
        }
        return relative_meanings;
    };

    $('#btcut3, #btlayout').prop('disabled', true);
    $('#btshuffle').click(shuffle);
    $('#btcut3').click(cut3times);
    $('#btlayout').click(layThemOut);

}(cartomancer));


