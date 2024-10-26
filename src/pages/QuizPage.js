import './App.css';
import { title } from './components/title';
import { navigationButton } from './components/navigationButton';
import { textinput } from './components/textinput';
import { option } from './components/option';
import { TableComponent } from './components/leaderboard';
import { hint } from './components/hint';


function Quiz(json) {
  return (
    <div className="App">
      <div className='main'>
        {title('q1')} {}
        <p>Ramdom question</p>
        {option('option 1')} {}
        <br></br>
        {option('option 1')} {}
        <br></br>
        {option('option 1')} {}
        <br></br>
        {option('option 1')} {}
      </div>
    </div>
  );
}

export default Quiz;
