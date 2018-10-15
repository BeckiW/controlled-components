import React from "react"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="title" />
        </form>

        <p>Current title state: {this.state.title}</p>
      </div>
    )
  }

}

export default App
