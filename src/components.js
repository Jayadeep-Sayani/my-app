import './App.css';
import { title } from './components/title';
import { navigationButton } from './components/navigationButton';
import { textinput } from './components/textinput';
import { option } from './components/option';
import { TableComponent } from './components/leaderboard';
import { hint } from './components/hint';


function Components() {
  return (
    <div className="Components">
      {title('My Awesome Title')}  {}
      {textinput('Enter a topic...')} {}
      {navigationButton('Signup')} {}
      {option('Option 1')} {}
      {TableComponent()} {}
      {hint()} {}
    </div>    
  );
}

export default Components;
