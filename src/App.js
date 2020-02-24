import React, {Component} from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

let marked = require("marked")

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://image.shutterstock.com/image-photo/pitbull-dog-alway-smile-260nw-629627696.jpg 'Cute Pitbull')

### Blockquote

> To be, or not to be. That is a stupid question.

### Code

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Benjamin'
const age = 37
const number = Math.random() * 10
\`\`\`
`

class App extends Component {

  state={
    markdown: initialMarkdown
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
            <FormControl id="editor" as="textarea" value={markdown} onChange={this.updateMarkdown}></FormControl>
         
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div id="preview" dangerouslySetInnerHTML = {{__html:(marked(markdown))}}>
            {/* {marked(markdown)} */}
          </div>
        </div>

      </div>
    )
  }
}

export default App;
