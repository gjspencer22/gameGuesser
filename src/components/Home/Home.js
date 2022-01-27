import React from 'react';
import './home.css';


function Home() {
    // const begin = begin();
    return (
        <div class = 'home'>
            <div class ='welcomeBox'>
                    <h1 class ='welcomeHeader'> Welcome to Game Gueser! </h1>
                 <div>
                    <p class ='welcomeText'>Listen to a sound and guess which video game it is from!</p>
                </div>
                <button onclick = "begin()" class ='beginButton' id = 'beginButton'>Begin Your Trial</button>
            </div>
        </div>
    );
}


export default Home;

