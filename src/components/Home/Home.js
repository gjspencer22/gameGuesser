import React from 'react';
import './home.css';


function Home() {
    return (
        <div class = 'home'>
            <div class ='welcomeBox'>
                    <h1 class ='welcomeHeader'> Welcome to Game Gueser! </h1>
                 <div>
                    <p class ='welcomeText'>Listen to a sound and guess which video game it is from!</p>
                </div>
                <button onclick = 'begin()' class ='beginButton' id = 'beginButton'>Begin Your Trial</button>
            </div>
        </div>
    );
}

function begin () {
    // const clicked = document.getElementById('beginButton')
    console.log('oy')
}
export default Home;