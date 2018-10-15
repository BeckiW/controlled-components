import React from "react"

class RadioExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: null
    }
  }

  handleRadioChange = (e) => {
    this.setState({
      selectedValue: e.target.value
    })
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="option1">Dogs?</label>
          <input
            id="option1"
            type="radio"
            value="Dogs"
            checked={this.state.selectedValue === "Dogs"}
            onChange={this.handleRadioChange} />
        </div>

        <div>
          <label htmlFor="option2">Cats?</label>
          <input
            id="option2"
            type="radio"
            value="Cats"
            checked={this.state.selectedValue === "Cats"}
            onChange={this.handleRadioChange} />
        </div>

        <div>
          <label htmlFor="option3">Neither!?</label>
          <input
            id="option3"
            type="radio"
            value="Neither"
            checked={this.state.selectedValue === "Neither"}
            onChange={this.handleRadioChange} />
        </div>
      </form>
    )
  }
}
