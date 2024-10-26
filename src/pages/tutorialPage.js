import './App.css';
import { title } from './components/title';
import { navigationButton } from './components/navigationButton';
import { textinput } from './components/textinput';
import { option } from './components/option';
import { TableComponent } from './components/leaderboard';
import { hint } from './components/hint';


function TutorialPage() {
  return (
    <div className="TutorialPage">
      <div className='main'>
        {title("Tutorial")}
        <br></br>
        
        <br></br>
        <p>Read the question at the top<br></br><br></br>
        Choose 1 of the 4 options that you think is correct<br></br><br></br>
        When chosen it will automatically be selected when clicked<br></br><br></br>
        If it’s right, it will highlight green and the wrong options will be highlighted red<br></br><br></br>
        You gain score for the correct options
        </p>
        <br></br>
        
        <br></br>
        {navigationButton('< Back')}
      </div>
    </div>
  );
}

export default TutorialPage;
