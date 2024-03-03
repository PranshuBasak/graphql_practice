const userlist = [
  {
    "id": "1",
    "name": "Alice Smith",
    "username": "alice123",
    "age": 30,
    "nationality": "AMERICAN",
    "friends": [
      {
        "id": "2",
        "name": "Bob Johnson",
      },
      {
        "id": "3",
        "name": "Charlie Brown",
      }
    ]
  },
  {
    "id": "2",
    "name": "Bob Johnson",
    "username": "bob456",
    "age": 28,
    "nationality": "CANADIAN",
    "friends": [
      {
        "id": "1",
        "name": "Alice Smith",
      },
      {
        "id": "3",
        "name": "Charlie Brown",
      }
    ]
  },
  {
    "id": "3",
    "name": "Charlie Brown",
    "username": "charlie789",
    "age": 25,
    "nationality": "BRITISH",
    "friends": [
      {
        "id": "1",
        "name": "Alice Smith",
      },
      {
        "id": "2",
        "name": "Bob Johnson",
      }
    ]
  },
  {
    "id": "4",
    "name": "Alice Brown",
    "username": "alice_brown92",
    "age": 27,
    "nationality": "AUSTRALIAN",
    "friends": [
      {"id": "2", "name": "Bob Johnson"},
      {"id": "3", "name": "Charlie Smith"}
    ]
  },
  {
    "id": "5",
    "name": "Bob Smith",
    "username": "bsmith",
    "age": 32,
    "nationality": "BRITISH",
    "friends": [
      {"id": "1", "name": "Alice Smith"},
      {"id": "6", "name": "Charlie Jones"}
    ]
  },
  {
    "id": "6",
    "name": "Charlie Jones",
    "username": "charliejones81",
    "age": 29,
    "nationality": "CANADIAN",
    "friends": [
      {"id": "4", "name": "Alice Brown"},
      {"id": "5", "name": "Bob Smith"}
    ]
  },
  {
    "id": "7",
    "name": "David Kim",
    "username": "dkim007",
    "age": 35,
    "nationality": "SOUTH_KOREA",
    "friends": [
      {"id": "1", "name": "Alice Smith"},
      {"id": "2", "name": "Bob Johnson"}
    ]
  },
  {
    "id": "8",
    "name": "Emily Chen",
    "username": "emilyc",
    "age": 26,
    "nationality": "CHINESE",
    "friends": [
      {"id": "4", "name": "Alice Brown"},
      {"id": "6", "name": "Charlie Jones"}
    ]
  },
  {
    "id": "9",
    "name": "Fiona Murphy",
    "username": "fiona_murphy",
    "age": 31,
    "nationality": "IRISH",
    "friends": [
      {"id": "7", "name": "David Kim"},
      {"id": "8", "name": "Emily Chen"}
    ]
  },
  {
    "id": "10",
    "name": "George Wilson",
    "username": "george_wilson75",
    "age": 28,
    "nationality": "SCOTTISH",
    "friends": [
      {"id": "11", "name": "Hannah Taylor"},
      {"id": "12", "name": "Ian Davies"}
    ]
  },
  {
    "id": "11",
    "name": "Hannah Taylor",
    "username": "hannah.taylor",
    "age": 29,
    "nationality": "WELSH",
    "friends": [
      {"id": "10", "name": "George Wilson"},
      {"id": "13", "name": "Jack Patel"}
    ]
  },
  {
    "id": "12",
    "name": "Ian Davies",
    "username": "ian_davies",
    "age": 30,
    "nationality": "BRITISH",
    "friends": [
      {"id": "10", "name": "George Wilson"},
      {"id": "14", "name": "Katie Brown"}
    ]
  },
  {
    "id": "13",
    "name": "Jack Patel",
    "username": "jack.patel",
    "age": 27,
    "nationality": "INDIAN",
    "friends": [
      {"id": "11", "name": "Hannah Taylor"},
      {"id": "14", "name": "Katie Brown"}
    ]
  },
  {
    "id": "14",
    "name": "Katie Brown",
    "username": "katie.brown",
    "age": 26,
    "nationality": "AUSTRALIAN",
    "friends": [
      {"id": "12", "name": "Ian Davies"},
      {"id": "13", "name": "Jack Patel"}
    ]
  },
  {
    "id": "15",
    "name": "Liam Garcia",
    "username": "liam.garcia",
    "age": 33,
    "nationality": "SPANISH",
    "friends": [
      {"id": "16", "name": "Mia Rodriguez"},
      {"id": "17", "name": "Noah Lopez"}
    ]
  },
  {
    "id": "16",
    "name": "Mia Rodriguez",
    "username": "mia.rodriguez",
    "age": 29,
    "nationality": "MEXICAN",
    "friends": [
      {"id": "15", "name": "Liam Garcia"},
      {"id": "17", "name": "Noah Lopez"}
    ]
  },
  {
    "id": "17",
    "name": "Noah Lopez",
    "username": "noah_lopez",
    "age": 32,
    "nationality": "ARGENTINEAN",
    "friends": [
      {"id": "15", "name": "Liam Garcia"},
      {"id": "16", "name": "Mia Rodriguez"}
    ]
  },
  {
    "id": "18",
    "name": "Olivia Martinez",
    "username": "olivia.martinez",
    "age": 28,
    "nationality": "COLOMBIAN",
    "friends": [
      {"id": "19", "name": "Peter Gonzales"},
      {"id": "20", "name": "Quinn Perez"}
    ]
  },
  {
    "id": "19",
    "name": "Peter Gonzales",
    "username": "peter_gonzales",
    "age": 30,
    "nationality": "PERUVIAN",
    "friends": [
      {"id": "18", "name": "Olivia Martinez"},
      {"id": "20", "name": "Quinn Perez"}
    ]
  },
  {
    "id": "20",
    "name": "Quinn Perez",
    "username": "quinn_perez",
    "age": 27,
    "nationality": "BRAZILIAN",
    "friends": [
      {"id": "18", "name": "Olivia Martinez"},
      {"id": "19", "name": "Peter Gonzales"}
    ]
  },
  {
    "id": "21",
    "name": "Rachel Fernandez",
    "username": "rachel.fernandez",
    "age": 26,
    "nationality": "PUERTO_RICAN",
    "friends": [
      {"id": "22", "name": "Samuel Ramirez"},
      {"id": "23", "name": "Taylor Hernandez"}
    ]
  },
  {
    "id": "22",
    "name": "Samuel Ramirez",
    "username": "samuel_ramirez",
    "age": 31,
    "nationality": "CUBAN",
    "friends": [
      {"id": "21", "name": "Rachel Fernandez"},
      {"id": "23", "name": "Taylor Hernandez"}
    ]
  },
  {
    "id": "23",
    "name": "Taylor Hernandez",
    "username": "taylor_hernandez",
    "age": 29,
    "nationality": "DOMINICAN",
    "friends": [
      {"id": "21", "name": "Rachel Fernandez"},
      {"id": "22", "name": "Samuel Ramirez"}
    ]
  },
  {
    "id": "24",
    "name": "Victor Kim",
    "username": "victor.kim",
    "age": 34,
    "nationality": "JAPANESE",
    "friends": [
      {"id": "25", "name": "Wendy Lee"},
      {"id": "26", "name": "Xavier Wong"}
    ]
  },
  {
    "id": "25",
    "name": "Wendy Lee",
    "username": "wendy_lee",
    "age": 32,
    "nationality": "CHINESE",
    "friends": [
      {"id": "24", "name": "Victor Kim"},
      {"id": "26", "name": "Xavier Wong"}
    ]
  },
  {
    "id": "26",
    "name": "Xavier Wong",
    "username": "xavier.wong",
    "age": 35,
    "nationality": "SINGAPOREAN",
    "friends": [
      {"id": "24", "name": "Victor Kim"},
      {"id": "25", "name": "Wendy Lee"}
    ]
  },
  {
    "id": "27",
    "name": "Yara Gomez",
    "username": "yara.gomez",
    "age": 27,
    "nationality": "ARGENTINEAN",
    "friends": [
      {"id": "28", "name": "Zachary Flores"},
      {"id": "29", "name": "Abigail Rodriguez"}
    ]
  },
  {
    "id": "28",
    "name": "Zachary Flores",
    "username": "zachary_flores",
    "age": 30,
    "nationality": "MEXICAN",
    "friends": [
      {"id": "27", "name": "Yara Gomez"},
      {"id": "29", "name": "Abigail Rodriguez"}
    ]
  },
  {
    "id": "29",
    "name": "Abigail Rodriguez",
    "username": "abigail_rodriguez",
    "age": 28,
    "nationality": "PERUVIAN",
    "friends": [
      {"id": "27", "name": "Yara Gomez"},
      {"id": "28", "name": "Zachary Flores"}
    ]
  },
  {
    "id": "30",
    "name": "Zara Khan",
    "username": "zara.khan",
    "age": 26,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "31", "name": "Youssef Ahmed"},
      {"id": "32", "name": "Xander Ali"}
    ]
  },
  {
    "id": "31",
    "name": "Youssef Ahmed",
    "username": "youssef_ahmed",
    "age": 27,
    "nationality": "EGYPTIAN",
    "friends": [
      {"id": "30", "name": "Zara Khan"},
      {"id": "32", "name": "Xander Ali"}
    ]
  },
  {
    "id": "32",
    "name": "Xander Ali",
    "username": "xander_ali",
    "age": 28,
    "nationality": "SAUDI",
    "friends": [
      {"id": "30", "name": "Zara Khan"},
      {"id": "31", "name": "Youssef Ahmed"}
    ]
  },
  {
    "id": "33",
    "name": "Uma Patel",
    "username": "uma.patel",
    "age": 29,
    "nationality": "INDIAN",
    "friends": [
      {"id": "34", "name": "Vijay Shah"},
      {"id": "35", "name": "Winston Kumar"}
    ]
  },
  {
    "id": "34",
    "name": "Vijay Shah",
    "username": "vijay.shah",
    "age": 32,
    "nationality": "INDIAN",
    "friends": [
      {"id": "33", "name": "Uma Patel"},
      {"id": "35", "name": "Winston Kumar"}
    ]
  },
  {
    "id": "35",
    "name": "Winston Kumar",
    "username": "winston_kumar",
    "age": 30,
    "nationality": "INDIAN",
    "friends": [
      {"id": "33", "name": "Uma Patel"},
      {"id": "34", "name": "Vijay Shah"}
    ]
  },
  {
    "id": "36",
    "name": "Yasmin Khan",
    "username": "yasmin.khan",
    "age": 31,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "37", "name": "Zara Ali"},
      {"id": "38", "name": "Xavier Khan"}
    ]
  },
  {
    "id": "37",
    "name": "Zara Ali",
    "username": "zara_ali",
    "age": 27,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "36", "name": "Yasmin Khan"},
      {"id": "38", "name": "Xavier Khan"}
    ]
  },
  {
    "id": "38",
    "name": "Xavier Khan",
    "username": "xavier_khan",
    "age": 29,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "36", "name": "Yasmin Khan"},
      {"id": "37", "name": "Zara Ali"}
    ]
  },
  {
    "id": "39",
    "name": "Zara Khan",
    "username": "zara.khan",
    "age": 30,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "40", "name": "Youssef Ali"},
      {"id": "41", "name": "Xena Khan"}
    ]
  },
  {
    "id": "40",
    "name": "Youssef Ali",
    "username": "youssef_ali",
    "age": 28,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "39", "name": "Zara Khan"},
      {"id": "41", "name": "Xena Khan"}
    ]
  },
  {
    "id": "41",
    "name": "Xena Khan",
    "username": "xena_khan",
    "age": 27,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "39", "name": "Zara Khan"},
      {"id": "40", "name": "Youssef Ali"}
    ]
  },
  {
    "id": "42",
    "name": "Yasmin Ali",
    "username": "yasmin_ali",
    "age": 29,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "43", "name": "Zainab Khan"},
      {"id": "44", "name": "Xavier Ali"}
    ]
  },
  {
    "id": "43",
    "name": "Zainab Khan",
    "username": "zainab_khan",
    "age": 28,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "42", "name": "Yasmin Ali"},
      {"id": "44", "name": "Xavier Ali"}
    ]
  },
  {
    "id": "44",
    "name": "Xavier Ali",
    "username": "xavier_ali",
    "age": 30,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "42", "name": "Yasmin Ali"},
      {"id": "43", "name": "Zainab Khan"}
    ]
  },
  {
    "id": "45",
    "name": "Zara Ali",
    "username": "zara_ali",
    "age": 28,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "46", "name": "Youssef Khan"},
    ]
  },
  {
    "id": "46",
    "name": "Youssef Khan",
    "username": "youssef_khan",
    "age": 27,
    "nationality": "PAKISTANI",
    "friends": [
      {"id": "45", "name": "Zara Ali"},
    ]
  },
]
  

const movielist = [
    {
      "id": "1",
      "name": "The Matrix",
      "releaseDate": 1999,
      "isInTheaters": false
    },
    {
      "id": "2",
      "name": "Inception",
      "releaseDate": 2010,
      "isInTheaters": false
    },
    {
      "id": "3",
      "name": "Avatar",
      "releaseDate": 2009,
      "isInTheaters": false
    },
    {
      "id": "4",
      "name": "Interstellar",
      "releaseDate": 2014,
      "isInTheaters": false
    },
    {
      "id": "5",
      "name": "The Dark Knight",
      "releaseDate": 2008,
      "isInTheaters": false
    }
]


module.exports = { userlist , movielist}