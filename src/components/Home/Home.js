import React from 'react';
import './home.css';


function Home() {
    // const begin = begin();
    return (
        <div className = 'home'>
            <div className ='welcomeBox'>
                    <h1 className ='welcomeHeader'> Welcome to Game Gueser! </h1>
                 <div>
                    <p className ='welcomeText'>Listen to a sound and guess which video game it is from!</p>
                </div>
<<<<<<< HEAD
                <button className ='beginButton' id = 'beginButton' onClick = {begin()} >Begin Your Trial</button>
=======
                <button onclick = "begin()" class ='beginButton' id = 'beginButton'>Begin Your Trial</button>
>>>>>>> facd7696dc09c9ee4f1b56c3646896950d5a3842
            </div>
        </div>
    );
}

<<<<<<< HEAD
function begin () {
    // const clicked = document.getElementById('beginButton')
    
    // document.getElementById('beginButton').style.color = 'orange'
    // onClick.console.log('oy')
}
export default Home;
=======

export default Home;

>>>>>>> facd7696dc09c9ee4f1b56c3646896950d5a3842
