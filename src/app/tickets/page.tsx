import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "../loading";
import TicketList from "./TicketList";


const Tickets = () => {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <p>
          <small>Currently open tickets</small>
        </p>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
