import React from 'react'

import correct from '../assets/correct-winner-sting-tomas-herudek-1-00-05.mp3';

export const hint = () => {

    function onStart() {
        const alarm = new Audio(correct);
        alarm.play();
    }

  return (
    <button onClick={onStart} className='hint'>Need a Hint?</button>
    
  )
}
