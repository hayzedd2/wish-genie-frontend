import Link from 'next/link'
import React from 'react'
import TicketList from './TicketList'

const Tickets = () => {
  return (
   <main>
    <nav>
      <h2>Tickets</h2>
      <p><small>Currently open tickets</small></p>
    </nav>
    <TicketList/>
   </main>
  )}

export default Tickets