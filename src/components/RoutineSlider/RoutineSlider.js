import React, {Component} from 'react';
import './RoutineSlider.sass';
import RoutineCard from '../RoutineCard';




class RoutineSlider extends Component{

    componentDidMount(){
       
    }


    render(){

        return (
            <div className="routine-slider">
                <div className="container">
                    <div className="row routine-slider__container">
                        <div className="routine-slider__prev-button col s1">prev</div>
                        <div className="routine-slider__inner col s10">
                            <div className="routine-slider__content">
                                <RoutineCard slidePosition="prev"/>
                                <RoutineCard slidePosition="prev"/>
                                <RoutineCard slidePosition="prev"/>
                                <RoutineCard slidePosition="prev"/>
                                <RoutineCard slidePosition="prev"/>
                                <RoutineCard slidePosition="prev"/>
                                <RoutineCard slidePosition="active"/>
                                <RoutineCard slidePosition="next"/>
                                <RoutineCard slidePosition="next"/>
                            </div>
                        </div>
                        <div className="routine-slider__next-button col s1">next</div>
                    </div>
                </div>
            </div>

        )
   }
    

}

export default RoutineSlider;