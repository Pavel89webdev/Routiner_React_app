import React, {Component} from 'react';
import './App.css';
import './libs/materialize/sass/materialize.scss';

import Header from './components/Header';
import RoutineSlider from './components/RoutineSlider';


class App extends Component {

  componentDidMount(){

  }

  render(){

    return (
      <div className="App">
        <Header/>
        <RoutineSlider/>
        
      </div>
    )
  }
}

export default App;
