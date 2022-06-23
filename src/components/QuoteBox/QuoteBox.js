import React, { useEffect, useState } from 'react';
import { FaTwitterSquare } from 'react-icons/fa'
const QuoteBox = () => {
    const [quote, setQuote] = useState([])
    useEffect(() => {
        fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
            .then(res => res.json())
            .then(data => setQuote(data.quotes[0]))
    }, [])
    return (
        <div className='flex items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl" id='quote-box'>
                <div className="card-body">
                    <h2 className="card-title text-center" id='text'>"{quote.text}</h2>
                    <div className="flex justify-end" id="author">
                        -{quote.author}
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" id='tweet-quote'>
                                <FaTwitterSquare style={{fontSize: "40px"}} />
                            </a>
                        </div>
                        <div className="card-actions" id="new-quote">
                            <button class="btn btn-primary">New Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;