import React, {Component} from 'react';
//import '../../libs/materialize/sass/materialize.scss';
import './RoutineSlider.sass';
import RoutineCard from '../RoutineCard';




class RoutineSlider extends Component{

    componentDidMount(){
       
    }


    render(){

        return (
            <div className="slider">
                <div className="container">
                    <div className="row">
                        <div className="slider__prev-button col s1">prev</div>
                        <div className="slider__inner col s10">
                            <RoutineCard/>
                            {/* <RoutineCard/>
                            <RoutineCard/>
                            <RoutineCard/>
                            <RoutineCard/> */}
                        </div>
                        <div className="slider__next-button col s1">next</div>
                    </div>
                </div>
            </div>

        )
   }
    

}

export default RoutineSlider;