import Head from './Components/Head/Head';
import CoreConcepts from './Components/CoreConcepts';
import Examples from './Components/Examples';
import Header from './Components/Header'
import UserInput from './Components/UserInput'
import Results from './Components/Results'
import { useState } from 'react';
import Player from './Components/Player'
import TimerChallenge from './Components/TimerChallenge';


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 8,
    duration: 10,
  });

  const inputsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUser) => {
      return {
        ...prevUser,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div>
      <Head />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputsValid && <p className="center">Please enter Value greater than zero..</p>}
      {inputsValid && < Results input={userInput} />}
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1}/>
        <TimerChallenge title="not easy" targetTime={5}/>
        <TimerChallenge title="Getting tough" targetTime={10}/>
        <TimerChallenge title="pros only" targetTime={15}/>

      </div>
    </div>
  );
}

export default App;