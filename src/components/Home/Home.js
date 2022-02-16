import React from 'react';
import './home.css';


function Home() {
    return (
        <div className = 'home'>
            <div className ='welcomeBox'>
                    <h1 className ='welcomeHeader'> Welcome to Game Gueser! </h1>
                 <div>
                    <p className ='welcomeText'>Listen to a sound and guess which video game it is from!</p>
                </div>
                <button className ='beginButton' id = 'beginButton' onClick = {begin()} >Begin Your Trial</button>
            </div>
        </div>
    );
}

function begin () {
    // const clicked = document.getElementById('beginButton')
    
    // document.getElementById('beginButton').style.color = 'orange'
    // onClick.console.log('oy')
}
export default Home;