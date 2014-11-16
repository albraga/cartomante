function Card(id, name, suit, value, position, individual_meaning, relative_meaning, img) {
    this.id = id;
    this.name = name;
    this.suit = suit;
    this.value = value;
    this.position = position;
    this.individual_meaning = individual_meaning;
    this.relative_meaning = relative_meaning;
    this.img = img;
}

var aceClubs = new Card(1, 'ace', 'clubs', 52, '', '', 'Playing_card_club_A.svg');
var kingClubs = new Card(2, 'king', 'clubs', 51, '', '', 'Playing_card_club_K.svg');
/*
3
queen
clubs
50

4
jack
clubs
49

5
ten
clubs
48

6
nine
clubs
47

7
eight
clubs
46

8
seven
clubs
45

9
six
clubs
44

10
five
clubs
43

11
four
clubs
42

12
three
clubs
41

13
two
clubs
40

14
ace
hearts
39

15
king
hearts
38

16
queen
hearts
37

17
jack
hearts
36

18
ten
hearts
35

19
nine
hearts
34

20
eight
hearts
33

21
seven
hearts
32

22
six
hearts
31

23
five
hearts
30

24
four
hearts
29

25
three
hearts
28

26
two
hearts
27

27
ace
Diamonds
26

28
king
Diamonds
25

29
queen
Diamonds
24

30
jack
Diamonds
23

31
ten
Diamonds
22

32
nine
Diamonds
21

33
eight
Diamonds
20

34
seven
Diamonds
19

35
six
Diamonds
18

36
five
Diamonds
17

37
four
Diamonds
16

38
three
Diamonds
15

39
two
Diamonds
14

40
ace
Spades
13

41
king
Spades
12

42
queen
Spades
11

43
jack
Spades
10

44
ten
Spades
9

45
nine
Spades
8

46
eight
Spades
7

47
seven
Spades
6

48
six
Spades
5

49
five
Spades
4

50
four
Spades
3

51
three
Spades
2

52
two
Spades
1
*/