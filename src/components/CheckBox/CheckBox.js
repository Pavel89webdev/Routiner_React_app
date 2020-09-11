import React, {Component} from 'react';
import './CheckBox.sass';

export default class Checkbox extends Component {
    constructor(props) {
      super();
      this.state = { checked: false }
      this.handleCheck = this.handleCheck.bind(this);
    }
  
    handleCheck(e){
     this.setState({
      checked: e.target.checked
     })
   }

    render(){
        return (
            <li className="checkbox__li">
              <label>
                <input
                id="checkboxId"
                type="checkbox"
                cheked={this.state.checked}
                onChange={this.handleCheck}
                className="filled-in"
                />
                <span className="checkbox__item flow-text">some task</span>
            </label>
            </li>  
        )  
    }
  }