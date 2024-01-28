import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
interface TicketProps {
  id: number;
  title: string;
  body: string;
  priority: string;
  user_email: string;
}

const getTickets = async () => {
  await new Promise(resolve => setTimeout(resolve , 3000))
  const res = await fetch('http://localhost:4000/tickets' , {
    next : {
      revalidate : 0
    }
  });
 if(!res.ok){
  notFound()
 }
 return res.json() 
};

const TicketList = async () => {
    const tickets: TicketProps[] = await getTickets();
    return (
      <>
        {tickets.map((ticket) => (
          <Link href={`/tickets/${ticket.id}`}>
          <div key={ticket.id} className='card my-5'>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
          </Link>
        ))}
        {tickets.length === 0 && (
          <p>There are no open tickets.</p>
        )}
      </>
    );

};

export default TicketList;