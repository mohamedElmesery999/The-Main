import { useState , useRef} from "react";

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState(); // Initialize with an empty string
  const inputRef = useRef();

  function handleClick() {
    setEnterPlayerName(inputRef.current.value)
    inputRef.current.value=''
  }

  return (
    <section id="player">
      <h2>Welcome Ya {enterPlayerName ?? " in Final Countdown"}</h2>
      <p>
        <input type="text" ref={inputRef} placeholder="Enter Name.."/>
        <button onClick={handleClick}>Submit</button>
      </p>
    </section>
  );
}
