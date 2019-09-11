import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';



function TicketList(props) {
  return(
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        ticketId={ticket.id}
        currentRouterPath={props.currentRouterPath}
        formattedWaitTime={ticket.formattedWaitTime}
        onTicketSelection={props.onTicketSelection} />
      )}
    </div>
  );
}


TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
