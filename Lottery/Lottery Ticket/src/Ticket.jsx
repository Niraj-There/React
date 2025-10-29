import TicketNum from './TicketNum.jsx';
import './Ticket.css'
export default function Ticket({ticket}) {
    return (
<>
        <p>Your Ticket Numbers: </p>
        <div className="Ticket">
            {ticket.map((num, idx)=> (

            <TicketNum num={num} key={idx} />

            ))}

        </div>
</>
    );
}