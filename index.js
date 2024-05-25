const quotes=[{
    "author":"Oscar Wilde",
    "thequotes":'"Be yourself; everyone else is already taken"'
},

{
    "author":'―Albert Einstein',
    "thequotes":'" Albert Einstein Two things are infinite: the universe and human stupidity"'
}
,
{
    "author":' Marcus Tullius Cicero',
    "thequotes":'" A room without books is like a body without a soul."'
}
,
{
    "author":'Mae West',
    "thequotes":'" You only live once, but if you do it right, once is enough."'
}
,
{
    "author":'Mahatma Gandhi',
    "thequotes":'" Be the change that you wish to see in the world."'
}
]
function getQuote() {

    // for (var index = 0; index < quotes.length; index++) {
        
        const random = Number.parseInt(Math.random()*quotes.length );
        
    document.getElementById('quote').innerHTML = `${quotes[random].thequotes}`;
    document.getElementById('author').innerHTML = `${quotes[random].author}`;


    // }

      
 }

