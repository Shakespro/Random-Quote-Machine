import { useState } from 'react';
import quotes from './assets/quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};  

const transition = "all 1s";


function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

 return (
 <div>
 <h1>Sakhile Design Titans</h1> 
 <div className="background" style={{backgroundColor: randomColor, transition }}>
   <div id="quote-box">  
    <div className="quote-content" style={{color: randomColor, transition}}>
    <h2 id="text">
      <FaQuoteLeft size="30" style={{marginRight: "10px"}}/>
      {quote.quote}
      <FaQuoteRight size="30" style={{marginLeft: "10px"}}/>
      </h2>
      <h4 id="author">
      {quote.author}</h4>
    </div>
    <div className="butttons">
      <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
        id="tweet-quote"
        style= {{
          backgroundColor: randomColor,
          marginRight: "10px",
          transition,
        }}
        >
          <FaTwitter color="white" />
      </a>
      <button 
        id="new-quote" 
        onClick={changeQuote} 
        style={{ backgroundColor: randomColor, transition, }}  
        > 
        Change Quote
      </button>
        
    </div>
  </div>
</div>
<h2 className="dedication">Special thanks: "Dudu Fihlela, Lwazi Fihlela, Victoria Dube, Sbo 'Ester' Msane"</h2>
</div>

  ); 
}

export default App;
