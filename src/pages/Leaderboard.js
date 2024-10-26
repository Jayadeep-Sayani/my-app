import './App.css';
import { title } from './components/title';
import { navigationButton } from './components/navigationButton';
import { textinput } from './components/textinput';
import { option } from './components/option';
import { TableComponent } from './components/leaderboard';
import { hint } from './components/hint';
import Quiz from './pages/QuizPage';


function App() {
  return (
    <div className="App">
      <div className='main'>
        {title("Leaderboard")} {}
        <br></br>
        {TableComponent()} {}
        <br></br>
        {navigationButton('< Back ')}
      </div>
    </div>
  );
}

export default App;
