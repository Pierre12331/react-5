import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div>
            <img src={quote.image} alt="test" />
            <ul>
                <li>Quote : {quote.quote}</li>
                <li>Character : {quote.character}</li>
                <li>character Direction : {quote.characterDirection}</li>

            </ul>
        </div>
    );
};

export  default  DisplayQuote;