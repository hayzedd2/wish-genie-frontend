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
const getTickets = async (id: any) => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0,
    },
  });
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
