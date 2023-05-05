import React, { Component } from "react";

class RadioButtonGroup extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return (
      <div className="mx-auto grid grid-cols-6">
        <div className="radio">
          <label>
            <input
              className="col-end-1"
              type="radio"
              value="PI"
              checked={this.state.selectedOption === "PI"}
              onChange={this.onValueChange}
            />
            PI
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="RI"
              checked={this.state.selectedOption === "RI"}
              onChange={this.onValueChange}
            />
            RI
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="RC"
              checked={this.state.selectedOption === "RC"}
              onChange={this.onValueChange}
            />
            RC
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="RO"
              checked={this.state.selectedOption === "RO"}
              onChange={this.onValueChange}
            />
            RO
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="CC"
              checked={this.state.selectedOption === "CC"}
              onChange={this.onValueChange}
            />
            CC
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="CD"
              checked={this.state.selectedOption === "CD"}
              onChange={this.onValueChange}
            />
            CD
          </label>
        </div>
      </div>
    )
  }
}

export default RadioButtonGroup;