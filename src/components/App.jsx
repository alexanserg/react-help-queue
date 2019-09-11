import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import Moment from 'moment';
import Admin from './Admin';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({selectedTicket: ticketId});
  }





  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticket.id].formattedWaitTime = (newMasterTicketList[ticket.id].timeOpen).fromNow(true)
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicket.id]: newTicket
    });
    newMasterTicketList[newTicket.id].formattedWaitTime = newMasterticketlist[newTicket.id].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={(props)=><TicketList ticketList={this.state.masterTicketList}
          currentRouterPath={props.location.pathname}
          />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} /> } />

          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList}
          onTicketSelection={this.handleChangingSelectedTicket}
          selectedTicket ={this.state.selectedTicket} currentRouterPath={props.location.pathname}/>} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
