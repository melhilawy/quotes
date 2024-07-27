var Quotes = [
    { quote: "“Be yourself; everyone else is already taken.”", 
      author: "-Oscar Wilde" },
    { quote: "“أغلط يا محترم علشان تتعلم محدش بيتعلم من الصح لازم تغلط علشان تتعلم.”",
      author: "―  معلمي و أبي من بعد أبي الأستاذ جمعة رجب" },
    { quote: "“So many books, so little time.”",
      author: "― Frank Zappa" },
    { quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      author: "― Albert Einstein" },
];
function getQuotes()
{
    var newIndex = Math.floor(Math.random() * Quotes.length);
    console.log(newIndex);
    document.getElementById("quote").innerHTML =Quotes[newIndex].quote;
    document.getElementById("author").innerHTML =Quotes[newIndex].author;

}