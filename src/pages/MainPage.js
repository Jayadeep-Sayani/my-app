import './App.css';
import { title } from './components/title';
import { navigationButton } from './components/navigationButton';
import { textinput } from './components/textinput';
import { option } from './components/option';
import { TableComponent } from './components/leaderboard';
import { hint } from './components/hint';


function MainPage() {
  return (
    <div className="MainPage">
      <div className='main'>
        {title("Quizzy!")}
        <p>Improve your general knowledge in this fun and interactive trivia game!</p>
        {navigationButton('Get Started')}
      </div>
    </div>
  );
}

export default MainPage;
