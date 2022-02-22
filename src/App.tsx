import React, {useRef, useState} from 'react';
import './App.css';
import AppleLogo from './applePixels.png'
import Monitor from './oldMonitor.png'
import useInterval from './gameInterval';

const canvasx = 1000
const canvasy = 1000
const initialSnake = [[4,10], [4,10]]
const initialApple = [[14,10]]
const scale = 50
const timeDelay = 100 // Milliseconds

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const [ snake, setSnake ] = useState(initialSnake)
	const [ apple, setApple ] = useState(initialApple)
	const [ direction, setDirection ] = useState([ 0, -1 ])
	const [ delay, setDelay ] = useState<number | null>(null)
	const [ gameOver, setGameOver ] = useState(false)
	const [ score, setScore ] = useState(0)

  useInterval(() => runGame(), delay)

  return (
    <div onKeyDown={(e) => changeDirection(e)}>
      <img src={AppleLogo} alt="fruit" width={30} />
      <img src={Monitor} alt="fruit" width={30} />
      <canvas className='playArea' ref={canvasRef} width={`${canvasx}px`} height={`${canvasy}px`} />
      {gameOver && <div className='gameOver'>Game Over</div>}
      <button onClick={play} className="playButton">Play</button>
      <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
      </div>
    </div>
  );
}

export default App;
