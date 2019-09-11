import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './ticket'
import TicketList from './TicketList';

function Admin(props){
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          currentRouterPath={props.currentRouterPath}
          formattedWaitTime={ticket.formattedWaitTime} />
      )}
    </div>
)}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Admin;
