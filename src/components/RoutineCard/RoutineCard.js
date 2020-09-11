import React, {Component} from 'react';
import Checkbox from '../CheckBox';
import './RoutineCard.sass';
import Hr from '../Hr';

export default class RoutineCard extends Component {

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
        

        return(
            
        <div className="col m8 offset-m2 ">
            <div className="routine-card card grey lighten-5 z-depth-4">
                <div className="card-content black-text">
                    <h4 className="grey-text">
                    Wensday
                    </h4>
                    <h4 className="grey-text">3.10.2020</h4>
                    <ul className="left-align">
                        <Hr title="morning"/>
                        <Checkbox/>
                        <Checkbox/>
                        <Hr title="day"/>
                        <Checkbox/>
                        <Hr title="afternoon"/>
                        <Checkbox/>
                    </ul>
                </div>
                {/* <div className="routine-card routine-card__action card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div> */}
            </div>
        </div>
        )
    }
}