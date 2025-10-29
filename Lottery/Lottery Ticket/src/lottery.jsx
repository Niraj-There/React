import {useState} from 'react';
import {genTicket, sum} from './helper.js';
import Ticket from './Ticket.jsx';


export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinner = winCondition(ticket);
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            {isWinner ? <h2>Congratulations! You won the lottery!</h2> : <h2>Sorry, better luck next time!</h2>}
            <button onClick={() => setTicket(genTicket(n))}>Generate New Ticket</button>
        </div>
    );
}   