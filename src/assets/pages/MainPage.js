import './App.css';
import { title } from './components/title';
import { navigationButton } from './components/navigationButton';
import { textinput } from './components/textinput';
import { option } from './components/option';
import { TableComponent } from './components/leaderboard';
import { hint } from './components/hint';


function App() {
  return (
    <div className="App">
      <div className='main'>
        {title("Quizzy!")}
        <p>Improve your general knowledge in this fun and interactive trivia game!</p>
        {navigationButton('Signup')}
        <br></br>
        {navigationButton('Login')}
      </div>
    </div>
  );
}

export default App;
