import React from 'react';
import './home.css';
import './index.js';

// const beginButton = document.getElementById('beginButton')

// beginButton.addEventListener('click', begin)

// function begin() {
//     console.log('oychump')
// }


function Home() {
    
    return (
        <div className='home'>
            <div className='welcomeBox'>
                <h1 className='welcomeHeader'> Welcome to Game Gueser! </h1>
                <div>
                    <p className='welcomeText'>Listen to a sound and guess which video game it is from!</p>
                </div>
                {/* <button className ='beginButton' id = 'beginButton' onClick = {begin()} >Begin Your Trial</button> */}
                <button className='beginButton' id='beginButton'>Begin Your Trial</button>
            </div>
        </div>
  );
}


// const nextButton = document.getElementById('nextButton')



export default Home;
