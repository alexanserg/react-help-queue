import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleShootingConfirmation = this.handleTroubleShootingConfirmation.bind(this);
  }

  handleTroubleShootingConfirmation(){
    this.setState({formVisibleOnPage: true});
    document.body.style.backgroundColor = '#FFC926';

  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleShootingConfirmation={this.handleTroubleShootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
