import React from 'react';
import PropTypes from 'prop-types';

import TicketList from './TicketList';

function Admin(props){
  return (
    <div>
      <h2>I am the Admin</h2>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          formattedWaitTime={ticket.formattedWaitTime}/>
      )}
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Admin;
