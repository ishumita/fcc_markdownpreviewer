import React, {Component} from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

let marked = require("marked")

class App extends Component {

  state={
    markdown: ""
  }

  updateMarkdown=(event)=>{
    this.setState({markdown:event.target.value})

    
  }


  render() {
   let {markdown} = this.state
   console.log(markdown)
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>Markdown Input</FormLabel>
            <FormControl as="textarea" placeholder="Enter Markdown" value={markdown}
            onChange={this.updateMarkdown}></FormControl>
         
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{__html:(marked(markdown))}}>
            {/* {marked(markdown)} */}
          </div>
        </div>

      </div>
    )
  }
}

export default App;
