import GamePlay from "./components/GamePlay";
import HomeGame from "./components/HomeGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <HomeGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
