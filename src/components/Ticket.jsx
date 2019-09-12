import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  const ticketInformation =
    <div>
      <style jsx>{'div {background-color: red;}'}</style>
      <h3>{props.location} - {props.names}</h3>
      <p>{props.formattedWaitTime}</p>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;
