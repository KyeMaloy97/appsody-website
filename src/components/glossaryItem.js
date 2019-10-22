import React from "react";

class GlossaryItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    }

    render() {
        if(this.state.isToggleOn) {
        return (
        <div className="tile glossary-card text-center">
          <h5 className="heading-glossary">{this.props.heading}</h5>
          <p>{this.props.desc}</p>
        </div>
      );
        } else {
        return (
        <div className="tile glossary-card text-center glossary-active">
          <h5 className="heading-glossary">{this.props.heading}</h5>
          <p>{this.props.desc}</p>
        </div>
      );
        }
    }
}

export default GlossaryItem;