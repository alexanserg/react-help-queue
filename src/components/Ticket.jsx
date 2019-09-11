import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

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
      <div onClick={() => {props.onTicketSelection({names: props.names, location: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime});}}>
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


function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
