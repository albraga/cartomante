var Cartomante = (function() {

function Card(id, name, suit, value, individual_meaning, relative_meaning, img) {
    this.id = id;
    this.name = name;
    this.suit = suit;
    this.value = value;
    this.individual_meaning = individual_meaning;
    this.relative_meaning = relative_meaning;
    this.img = img;
    this.position;
}

var aceClubs = new Card(1, 'ace', 'Clubs', 52, ['Wealth, happiness and peace of mind.', 'Riqueza, felicidade e paz de espírito.'], ['', ''], 'img/Playing_card_club_A.svg');
var kingClubs = new Card(2, 'king', 'Clubs', 51, ['A dark man, upright, faithful and affectionate in disposition.', 'Um homem misterioso, justo, fiel e carinhoso.'], ['', ''], 'img/Playing_card_club_K.svg');
var queenClubs = new Card(3, 'queen', 'Clubs', 50, ['A dark woman, gentle and pleasing.', 'Uma mulher misteriosa, suave e agradável.'], ['', ''], 'img/Playing_card_club_Q.svg');
var jackClubs = new Card(4, 'jack', 'Clubs', 49, ['A sincere but hasty friend. Also a dark man\'s thoughts.', 'Um amigo sincero mas precipitado. Também a atenção de um homem misterioso.'], ['', ''], 'img/Playing_card_club_J.svg');
var tenClubs = new Card(5, 'ten', 'Clubs', 48, ['Unexpected riches, and loss of a dear friend.', 'Riquezas inesperadas, e perda de um amigo querido.'], ['', ''], 'img/Playing_card_club_10.svg');
var nineClubs = new Card(6, 'nine', 'Clubs', 47, ['', ''], ['', ''], 'img/Playing_card_club_9.svg');
var eightClubs = new Card(7, 'eight', 'clubs', 46, ['', ''], ['', ''], 'img/Playing_card_club_8.svg');
var sevenClubs = new Card(8, 'seven', 'Clubs', 45, ['', ''], ['', ''], 'img/Playing_card_club_7.svg');
var sixClubs = new Card(9, 'six', 'Clubs', 44, ['', ''], ['', ''], 'img/Playing_card_club_6.svg');
var fiveClubs = new Card(10, 'five', 'Clubs', 43, ['', ''], ['', ''], 'img/Playing_card_club_5.svg');
var fourClubs = new Card(11, 'four', 'Clubs', 42, ['', ''], ['', ''], 'img/Playing_card_club_4.svg');
var threeClubs = new Card(12, 'three', 'Clubs', 41, ['', ''], ['', ''], 'img/Playing_card_club_3.svg');
var twoClubs = new Card(13, 'two', 'Clubs', 40, ['', ''], ['', ''], 'img/Playing_card_club_2.svg');
var aceHearts = new Card(14, 'ace', 'Hearts', 39, ['', ''], ['', ''], 'img/Playing_card_heart_A.svg');
var kingHearts = new Card(15, 'king', 'Hearts', 38, ['', ''], ['', ''], 'img/Playing_card_heart_K.svg');
var queenHearts = new Card(16, 'queen', 'Hearts', 37, ['', ''], ['', ''], 'img/Playing_card_heart_Q.svg');
var jackHearts = new Card(17, 'jack', 'Hearts', 36, ['', ''], ['', ''], 'img/Playing_card_heart_J.svg');
var tenHearts = new Card(18, 'ten', 'Hearts', 35, ['', ''], ['', ''], 'img/Playing_card_heart_10.svg');
var nineHearts = new Card(19, 'nine', 'Hearts', 34, ['', ''], ['', ''], 'img/Playing_card_heart_9.svg');
var eightHearts = new Card(20, 'eight', 'Hearts', 33, ['', ''], ['', ''], 'img/Playing_card_heart_8.svg');
var sevenHearts = new Card(21, 'seven', 'Hearts', 32, ['', ''], ['', ''], 'img/Playing_card_heart_7.svg');
var sixHearts = new Card(22, 'six', 'Hearts', 31, ['', ''], ['', ''], 'img/Playing_card_heart_6.svg');
var fiveHearts = new Card(23, 'five', 'Hearts', 30, ['', ''], ['', ''], 'img/Playing_card_heart_5.svg');
var fourHearts = new Card(24, 'four', 'Hearts', 29, ['', ''], ['', ''], 'img/Playing_card_heart_4.svg');
var threeHearts = new Card(25, 'three', 'Hearts', 28, ['', ''], ['', ''], 'img/Playing_card_heart_3.svg');
var twoHearts = new Card(26, 'two', 'Hearts', 27, ['', ''], ['', ''], 'img/Playing_card_heart_2.svg');
var aceDiamonds = new Card(27, 'ace', 'Diamonds', 26, ['', ''], ['', ''], 'img/Playing_card_diamond_A.svg');
var kingDiamonds = new Card(28, 'king', 'Diamonds', 25, ['', ''], ['', ''], 'img/Playing_card_diamond_K.svg');
var queenDiamonds = new Card(29, 'queen', 'Diamonds', 24, ['', ''], ['', ''], 'img/Playing_card_diamond_Q.svg');
var jackDiamonds = new Card(30, 'jack', 'Diamonds', 23, ['', ''], ['', ''], 'img/Playing_card_diamond_J.svg');
var tenDiamonds = new Card(31, 'ten', 'Diamonds', 22, ['', ''], ['', ''], 'img/Playing_card_diamond_10.svg');
var nineDiamonds = new Card(32, 'nine', 'Diamonds', 21, ['', ''], ['', ''], 'img/Playing_card_diamond_9.svg');
var eightDiamonds = new Card(33, 'eight', 'Diamonds', 20, ['', ''], ['', ''], 'img/Playing_card_diamond_8.svg');
var sevenDiamonds = new Card(34, 'seven', 'Diamonds', 19, ['', ''], ['', ''], 'img/Playing_card_diamond_7.svg');
var sixDiamonds = new Card(35, 'six', 'Diamonds', 18, ['', ''], ['', ''], 'img/Playing_card_diamond_6.svg');
var fiveDiamonds = new Card(36, 'five', 'Diamonds', 17, ['', ''], ['', ''], 'img/Playing_card_diamond_5.svg');
var fourDiamonds = new Card(37, 'four', 'Diamonds', 16, ['', ''], ['', ''], 'img/Playing_card_diamond_4.svg');
var threeDiamonds = new Card(38, 'three', 'Diamonds', 15, ['', ''], ['', ''], 'img/Playing_card_diamond_3.svg');
var twoDiamonds = new Card(39, 'two', 'Diamonds', 14, ['', ''], ['', ''], 'img/Playing_card_diamond_2.svg');
var aceSpades = new Card(40, 'ace', 'Spades', 13, ['', ''], ['', ''], 'img/Playing_card_spade_A.svg');
var kingSpades = new Card(41, 'king', 'Spades', 12, ['', ''], ['', ''], 'img/Playing_card_spade_K.svg');
var queenSpades = new Card(42, 'queen', 'Spades', 11, ['', ''], ['', ''], 'img/Playing_card_spade_Q.svg');
var jackSpades = new Card(43, 'jack', 'Spades', 10, ['', ''], ['', ''], 'img/Playing_card_spade_J.svg');
var tenSpades = new Card(44, 'ten', 'Spades', 9, ['', ''], ['', ''], 'img/Playing_card_spade_10.svg');
var nineSpades = new Card(45, 'nine', 'Spades', 8, ['', ''], ['', ''], 'img/Playing_card_spade_9.svg');
var eightSpades = new Card(46, 'eight', 'Spades', 7, ['', ''], ['', ''], 'img/Playing_card_spade_8.svg');
var sevenSpades = new Card(47, 'seven', 'Spades', 6, ['', ''], ['', ''], 'img/Playing_card_spade_7.svg');
var sixSpades = new Card(48, 'six', 'Spades', 5, ['', ''], ['', ''], 'img/Playing_card_spade_6.svg');
var fiveSpades = new Card(49, 'five', 'Spades', 4, ['', ''], ['', ''], 'img/Playing_card_spade_5.svg');
var fourSpades = new Card(50, 'four', 'Spades', 3, ['', ''], ['', ''], 'img/Playing_card_spade_4.svg');
var threeSpades = new Card(51, 'three', 'Spades', 2, ['', ''], ['', ''], 'img/Playing_card_spade_3.svg');
var twoSpades = new Card(52, 'two', 'Spades', 1, ['', ''], ['', ''], 'img/Playing_card_spade_2.svg');

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

var grabAcard = function() {
    var indice = Math.floor((Math.random() * 51));
    var cardR = deck[indice];
    deck.splice(indice, 1);
    return cardR;
};

return {
    grabAcard: grabAcard
};

}());

var EN_US = 0;
var PT_BR = 1;
var LANG = PT_BR;
alert(Cartomante.grabAcard().individual_meaning[LANG]);