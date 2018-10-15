import React from "react"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange} />
        </form>

        <p>Current title state: {this.state.title}</p>
      </div>
    )
  }

}

export default App
