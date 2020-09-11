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
            
        <div className={`routine-card__wrapper routine-card__wrapper__${this.props.slidePosition}`}>
            <div className={`card routine-card routine-card__${this.props.slidePosition}`}>
                <div className="card-content black-text">
                    <h4 className="grey-text center-align">
                    Wensday
                    </h4>
                    <h4 className="grey-text center-align">3.10.2020</h4>
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