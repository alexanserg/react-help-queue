import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './ticket'
import TicketList from './TicketList';
import TicketDetail from './TicketDetail'

function Admin(props){
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket != null){
    optionalSelectedTicketContent =  <TicketDetail selectedTicket={props.selectedTicket}/>;
  }
  return (
    <div>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList = {props.ticketList}
        onTicketSelection={props.onTicketSelection}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.object
};

export default Admin;
