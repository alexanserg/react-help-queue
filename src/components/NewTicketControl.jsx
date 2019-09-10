import React from "react";
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm'

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      formVisibleOnPage: false
    };
    this.handleTroubleShootingConfirmation = this.handleTroubleShootingConfirmation.bind(this);
  }

  handleTroubleShootingConfirmation(){
    this.setState({formVisibleOnPage: true});

    document.body.style.backgroundColor = "#FFC926";

  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleShootingConfirmation={this.handleTroubleShootingConfirmation}/>
    }
    return (
      <div>
        {currentlyVisibleContent}
        <strong onClick={this.handleClick}>Click on me to change my state!</strong>
      </div>
    );
  }
}

export default NewTicketControl
