import '../App.css';
import { useState } from 'react';
import { title } from '../components/title';
import { Option } from '../components/option'; // Update the import statement

// Sample JSON data (you should replace this with your actual JSON import)
const quizData = [
    [
        {
            "question": "In Minecraft, what material is required to build a Nether Portal?",
            "options": [
                "Obsidian",
                "Diamond",
                "Iron Ingot",
                "Gold Block"
            ],
            "answer": 0,
            "hint": "This material is dark, resistant to explosions, and requires a diamond or netherite pickaxe to mine."
        }
    ],
    [
        {
            "question": "Which of these blocks is not naturally generated in the Minecraft world?",
            "options": [
                "Diamond Ore",
                "Grass Block",
                "Sandstone",
                "Nether Quartz Ore"
            ],
            "answer": 1,
            "hint": "This block is often created by players through crafting or placing grass seeds on dirt."
        }
    ],
    [
        {
            "question": "What is the maximum number of bookshelves that can be placed around an enchantment table to achieve level 30 enchantments in Minecraft?",
            "options": [
                "12",
                "15",
                "18",
                "21"
            ],
            "answer": 2,
            "hint": "The number of bookshelves needed is a multiple of 3."
        }
    ],
    [
        {
            "question": "In Minecraft, what is the default block used to build the outer shell of the End Gateway portal?",
            "options": [
                "End Stone",
                "Obsidian",
                "Endstone Bricks",
                "End Portal Frame"
            ],
            "answer": 3,
            "hint": "This block is used to frame the End Portal and can only be obtained in creative mode or by commands."
        }
    ],
    [
        {
            "question": "Which of these mobs in Minecraft is known for exploding when it gets close to the player?",
            "options": [
                "Creeper",
                "Zombie",
                "Skeleton",
                "Spider"
            ],
            "answer": 0,
            "hint": "This mob has a distinctive hissing sound and is green in color."
        }
    ]
];


function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex][0];

  const handleOptionClick = (index) => {
    if (index === currentQuestion.answer) {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      alert("Wrong answer! Try again.");
    }
  };

  return (
    <div className="App">
      <div className='main'>
        {title('Quiz')}
        <p>{currentQuestion.question}</p>
        {currentQuestion.options.map((optionText, index) => (
          <Option 
            key={index} 
            text={optionText} // Pass the option text
            onClick={() => handleOptionClick(index)} // Pass the click handler
          />
        ))}
        <br />
        {currentQuestionIndex === quizData.length - 1 ? (
          <p>Quiz Completed!</p>
        ) : null}
      </div>
    </div>
  );
}

export default Quiz;
