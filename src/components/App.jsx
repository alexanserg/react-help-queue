import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import MyStyledComponent from './MyStyledComponent'
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
    </div>
  )
}

export default App
