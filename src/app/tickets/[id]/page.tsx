import { notFound } from "next/navigation";
import React from "react";
interface RouteProps {
  params: { id: number };
}
interface TicketProps {
  id: number;
  title: string;
  body: string;
  priority: string;
  user_email: string;
}
export const dynamicParams = true;

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();
  return tickets.map((ticket: any) => ({
    id: ticket.id,
  }));
};
const getTickets = async (id: any) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
};

const TicketDetails: React.FC<RouteProps> = async ({ params }) => {
  const detail: TicketProps = await getTickets(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{detail.title}</h3>
        <small>Created by {detail.user_email}</small>
        <p>{detail.body}</p>
        <div className={`pill ${detail.priority}`}>
          {detail.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
