import './App.css';
import { title } from './components/title';
import { navigationButton } from './components/navigationButton';
import { textinput } from './components/textinput';
import { option } from './components/option';
import { TableComponent } from './components/leaderboard';
import { hint } from './components/hint';


function HomePage() {
  return (
    <div className="App">
      <div className='main'>
        {title('Play a Game')} {}
        <p>Enter a topic and press the play button to start a new game!</p>
        {textinput('Enter your topic...')} {}
        <br></br>
        {navigationButton('Enter a Game')} {}
        <br></br>
        <div className='lead'>
          {navigationButton('Leaderboard')} {}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
