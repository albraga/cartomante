var Cartomancer = (function ($) {

    var LANG = -1;
    var noprediction = "";

    i18n.init({fallbackLng: false}, function () {
        $("#shuhfuhl").i18n();
        $("#kuht").i18n();
        $("#skater").i18n();
        $("#pridikshuhn").i18n();
        noprediction = $.t("noprediction");
        LANG = $.t("langgwij");
    });  

    function Card(id, name, suit, value, individual_meaning, img) {
        this.id = id;
        this.name = name;
        this.suit = suit;
        this.value = value;
        this.individual_meaning = individual_meaning;
        this.img = img;
    }

    function Word(token, relative_meaning) {
        this.token = token;
        this.relative_meaning = relative_meaning;
    }

    var aceClubs = new Card(1, 'ace', 'Clubs', 1, ['Wealth, happiness and peace of mind.', 'Riqueza, felicidade e paz de espírito.'], 'img/Playing_card_club_A.svg');
    var kingClubs = new Card(2, 'king', 'Clubs', 1, ['A dark man, upright, faithful and affectionate in disposition.', 'Um homem misterioso, justo, fiel e carinhoso.'], 'img/Playing_card_club_K.svg');
    var queenClubs = new Card(3, 'queen', 'Clubs', 1, ['A dark woman, gentle and pleasing.', 'Uma mulher misteriosa, suave e agradável.'], 'img/Playing_card_club_Q.svg');
    var jackClubs = new Card(4, 'jack', 'Clubs', 0, ['A sincere but hasty friend. Also a dark man\'s thoughts.', 'Um amigo sincero mas precipitado. Também a atenção de um homem misterioso.'], 'img/Playing_card_club_J.svg');
    var tenClubs = new Card(5, 'ten', 'Clubs', 0, ['Unexpected riches, and loss of a dear friend.', 'Riquezas inesperadas, e perda de um amigo querido.'], 'img/Playing_card_club_10.svg');
    var nineClubs = new Card(6, 'nine', 'Clubs', 0, ['Disobedience to friends\' wishes.', 'Desobediência aos desejos dos amigos.'], 'img/Playing_card_club_9.svg');
    var eightClubs = new Card(7, 'eight', 'clubs', -1, ['A covetous man. It also warns against speculations.', 'Um homem ganancioso. A carta também adverte contra especulações.'], 'img/Playing_card_club_8.svg');
    var sevenClubs = new Card(8, 'seven', 'Clubs', 1, ['Promises good fortune and happiness, but bids a person beware of the opposite sex.', 'Promete boa sorte e felicidade, mas manda tomar cuidado com o sexo oposto.'], 'img/Playing_card_club_7.svg');
    var sixClubs = new Card(9, 'six', 'Clubs', 1, ['Predicts a lucrative business.', 'Prevê um negócio lucrativo.'], 'img/Playing_card_club_6.svg');
    var fiveClubs = new Card(10, 'five', 'Clubs', 1, ['A prudent marriage.', 'Um casamento prudente.'], 'img/Playing_card_club_5.svg');
    var fourClubs = new Card(11, 'four', 'Clubs', 0, ['Cautiousness against inconstancy or change of object for the sake of money.', 'Cautela contra inconstância ou mudança de objetivo, para não perder dinheiro.'], 'img/Playing_card_club_4.svg');
    var threeClubs = new Card(12, 'three', 'Clubs', 0, ['Shows that a person will be more than once married.', 'Mostra que uma pessoa vai se casar mais de uma vez.'], 'img/Playing_card_club_3.svg');
    var twoClubs = new Card(13, 'two', 'Clubs', -1, ['A disappointment.', 'Uma decepção.'], 'img/Playing_card_club_2.svg');
    var aceHearts = new Card(14, 'ace', 'Hearts', 0, ['The house. If attended by spades, it foretells quarrelling, if by hearts, affection and friendship, if by diamonds, money and distant friends, if by clubs, feasting and merry-making.', 'A casa. Se na presença do naipe de espadas: ele prediz brigas; se na presença do naipe de copas: carinho e amizade; se na presença do naipe de ouros: dinheiro e amigos distantes; se na presença do naipe de paus: festa e folia.'], 'img/Playing_card_heart_A.svg');
    var kingHearts = new Card(15, 'king', 'Hearts', 0, ['A fair man, of good-natured disposition, but hasty and rash.', 'Um belo homem, de boa índole, porém apressado e precipitado.'], 'img/Playing_card_heart_K.svg');
    var queenHearts = new Card(16, 'queen', 'Hearts', 1, ['A fair woman, faithful, prudent and affectionate.', 'Uma bela mulher, fiel, prudente e afetuosa.'], 'img/Playing_card_heart_Q.svg');
    var jackHearts = new Card(17, 'jack', 'Hearts', 1, ['The dearest friend of the consulting party. Also a fair person\'s thoughts.', 'A amizade mais querida. Também o interesse uma bela pessoa.'], 'img/Playing_card_heart_J.svg');
    var tenHearts = new Card(18, 'ten', 'Hearts', 1, ['Is prophetic of happiness and many children, is corrective of the bad tidings of cards next to it, and confirms their good tidings.', 'Felicidade e muitos filhos, corrige as más notícias de outras cartas ao seu lado e confirma as boas notícias.'], 'img/Playing_card_heart_10.svg');
    var nineHearts = new Card(19, 'nine', 'Hearts', 1, ['Wealth and high esteem. Also the wish card.', 'Riqueza e alta estima. A carta desejada.'], 'img/Playing_card_heart_9.svg');
    var eightHearts = new Card(20, 'eight', 'Hearts', 1, ['Pleasure, company.', 'Prazer, companhia.'], 'img/Playing_card_heart_8.svg');
    var sevenHearts = new Card(21, 'seven', 'Hearts', -1, ['A fickle and false friend, against whom be on your guard.', 'Um amigo inconstante e falso, não baixe a guarda.'], 'img/Playing_card_heart_7.svg');
    var sixHearts = new Card(22, 'six', 'Hearts', 1, ['A generous but credulous person.', 'Uma pessoa generosa porém crédula.'], 'img/Playing_card_heart_6.svg');
    var fiveHearts = new Card(23, 'five', 'Hearts', -1, ['Troubles caused by unfounded jealousy.', 'Problemas causados pelo ciúme sem fundamento.'], 'img/Playing_card_heart_5.svg');
    var fourHearts = new Card(24, 'four', 'Hearts', -1, ['A person not easily won.', 'Uma pessoa difícil de vencer.'], 'img/Playing_card_heart_4.svg');
    var threeHearts = new Card(25, 'three', 'Hearts', -1, ['Sorrow caused by a person\'s own imprudence.', 'Tristeza causada pela própria imprudência.'], 'img/Playing_card_heart_3.svg');
    var twoHearts = new Card(26, 'two', 'Hearts', 1, ['Great success, but equal care and attention needed to secure it.', 'Grande sucesso, mas cuidado e atenção para não perdê-lo.'], 'img/Playing_card_heart_2.svg');
    var aceDiamonds = new Card(27, 'ace', 'Diamonds', 0, ['A letter, but from whom and what about must be judged by the neighbouring cards.', 'Uma mensagem, mas de quem e sobre o quê deve ser revelado pelas cartas vizinhas.'], 'img/Playing_card_diamond_A.svg');
    var kingDiamonds = new Card(28, 'king', 'Diamonds', -1, ['A fair man, hot tempered, obstinate and revengeful.', 'Um belo homem, de temperamento explosivo, obstinado e vingativo.'], 'img/Playing_card_diamond_K.svg');
    var queenDiamonds = new Card(29, 'queen', 'Diamonds', 1, ['A fair woman, fond of company and a coquette.', 'Uma bela mulher, gosta de companhia e de flertar.'], 'img/Playing_card_diamond_Q.svg');
    var jackDiamonds = new Card(30, 'jack', 'Diamonds', -1, ['A near relation who considers only his own interests. Also a fair person\'s thoughts.', 'Um relacionamento egoísta. Também o interesse de uma bela pessoa.'], 'img/Playing_card_diamond_J.svg');
    var tenDiamonds = new Card(31, 'ten', 'Diamonds', 1, ['Money.', 'Dinheiro.'], 'img/Playing_card_diamond_10.svg');
    var nineDiamonds = new Card(32, 'nine', 'Diamonds', 0, ['Shows that a person is fond of roving.', 'Mostra que uma pessoa gosta de vagabundagem.'], 'img/Playing_card_diamond_9.svg');
    var eightDiamonds = new Card(33, 'eight', 'Diamonds', 0, ['A marriage late in life.', 'Um casamento no final da vida.'], 'img/Playing_card_diamond_8.svg');
    var sevenDiamonds = new Card(34, 'seven', 'Diamonds', -1, ['Satire, evil speaking.', 'Sátira, maledicência.'], 'img/Playing_card_diamond_7.svg');
    var sixDiamonds = new Card(35, 'six', 'Diamonds', -1, ['Early marriage and widowhood.', 'Casamento precoce e viuvez.'], 'img/Playing_card_diamond_6.svg');
    var fiveDiamonds = new Card(36, 'five', 'Diamonds', 0, ['Unexpected news.', 'Notícias inesperadas.'], 'img/Playing_card_diamond_5.svg');
    var fourDiamonds = new Card(37, 'four', 'Diamonds', -1, ['Trouble arising from unfaithful friends, also a betrayed secret.', 'Problemas decorrentes de amigos infiéis, também a traição de um segredo revelado.'], 'img/Playing_card_diamond_4.svg');
    var threeDiamonds = new Card(38, 'three', 'Diamonds', -1, ['Quarrels, law-suits and domestic disagreements.', 'Brigas, ações judiciais e desavenças domésticas.'], 'img/Playing_card_diamond_3.svg');
    var twoDiamonds = new Card(39, 'two', 'Diamonds', -1, ['An engagement against the wishes of friends.', 'Um compromisso contra a vontade dos amigos.'], 'img/Playing_card_diamond_2.svg');
    var aceSpades = new Card(40, 'ace', 'Spades', -1, ['Great misfortune, spite.', 'Grande infortúnio, rancor.'], 'img/Playing_card_spade_A.svg');
    var kingSpades = new Card(41, 'king', 'Spades', -1, ['A dark, ambitious man.', 'Um homem sombrio, ambicioso.'], 'img/Playing_card_spade_K.svg');
    var queenSpades = new Card(42, 'queen', 'Spades', -1, ['A malicious, dark woman, generally a widow.', 'Uma mulher maliciosa, sombria, geralmente uma viúva.'], 'img/Playing_card_spade_Q.svg');
    var jackSpades = new Card(43, 'jack', 'Spades', -1, ['An indolent, envious person, a dark man\'s thoughts.', 'Uma pessoa indolente, invejosa, o interesse de um homem sombrio.'], 'img/Playing_card_spade_J.svg');
    var tenSpades = new Card(44, 'ten', 'Spades', -1, ['Grief, imprisonment.', 'Dor, prisão.'], 'img/Playing_card_spade_10.svg');
    var nineSpades = new Card(45, 'nine', 'Spades', -1, ['Sickness and misfortune.', 'Doença e infortúnio.'], 'img/Playing_card_spade_9.svg');
    var eightSpades = new Card(46, 'eight', 'Spades', 0, ['Warns a person to be cautious in his undertakings.', 'Seja cauteloso em seus empreendimentos.'], 'img/Playing_card_spade_8.svg');
    var sevenSpades = new Card(47, 'seven', 'Spades', -1, ['Loss of a friend, attended with much trouble.', 'A perda de um amigo.'], 'img/Playing_card_spade_7.svg');
    var sixSpades = new Card(48, 'six', 'Spades', 1, ['Wealth through industry.', 'Riqueza através da diligência.'], 'img/Playing_card_spade_6.svg');
    var fiveSpades = new Card(49, 'five', 'Spades', 0, ['Shows that a bad temper requires correcting.', 'Mostra que o mau feitio requer correção.'], 'img/Playing_card_spade_5.svg');
    var fourSpades = new Card(50, 'four', 'Spades', -1, ['Sickness.', 'Doença.'], 'img/Playing_card_spade_4.svg');
    var threeSpades = new Card(51, 'three', 'Spades', 0, ['A journey.', 'Uma viagem.'], 'img/Playing_card_spade_3.svg');
    var twoSpades = new Card(52, 'two', 'Spades', -1, ['A removal.', 'Um afastamento.'], 'img/Playing_card_spade_2.svg');

    var deck = [
        aceClubs,
        kingClubs,
        queenClubs,
        jackClubs,
        tenClubs,
        nineClubs,
        eightClubs,
        sevenClubs,
        sixClubs,
        fiveClubs,
        fourClubs,
        threeClubs,
        twoClubs,
        aceHearts,
        kingHearts,
        queenHearts,
        jackHearts,
        tenHearts,
        nineHearts,
        eightHearts,
        sevenHearts,
        sixHearts,
        fiveHearts,
        fourHearts,
        threeHearts,
        twoHearts,
        aceDiamonds,
        kingDiamonds,
        queenDiamonds,
        jackDiamonds,
        tenDiamonds,
        nineDiamonds,
        eightDiamonds,
        sevenDiamonds,
        sixDiamonds,
        fiveDiamonds,
        fourDiamonds,
        threeDiamonds,
        twoDiamonds,
        aceSpades,
        kingSpades,
        queenSpades,
        jackSpades,
        tenSpades,
        nineSpades,
        eightSpades,
        sevenSpades,
        sixSpades,
        fiveSpades,
        fourSpades,
        threeSpades,
        twoSpades
    ];

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
        //deck.reverse();
        $('#btshuffle').prop('disabled', true);
        $('#btcut3').prop('disabled', false);
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
    };

    var cutOnce = function () {
        var cut1 = deck.slice(0, 26);
        var cut2 = deck.slice(26, deck.length);
        deck.length = 0;
        deck = cut1.concat(cut2);
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
        var teybuhl = fillTable();
        var relative_meanings = fillRelativeMeanings(createTokens(teybuhl));
        if (relative_meanings[0] === "" &&
                relative_meanings[1] === "" &&
                relative_meanings[2] === "" &&
                relative_meanings[3] === "" &&
                relative_meanings[4] === "" &&
                relative_meanings[5] === "") {
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
        cutOnce: cutOnce,
        cut3times: cut3times,
        layThemOut: layThemOut
    };

}(jQuery));


