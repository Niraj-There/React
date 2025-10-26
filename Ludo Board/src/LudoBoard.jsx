import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({Blue:0, Red:0, Green:0, Yellow:0});
    let [arr, SetArr] = useState([0, 0, 0, 0]);
    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue Moves = {moves.Blue}</p>
                <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => setMoves({ ...moves, Blue: moves.Blue + 1 })}>+1</button>
                <p>Red Moves = {moves.Red} </p>
                <button style={{ backgroundColor: "red", color: "white" }} onClick={() => setMoves({ ...moves, Red: moves.Red + 1 })}>+1</button>
                <p>Green Moves = {moves.Green} </p>
                <button style={{ backgroundColor: "green", color: "white" }} onClick={() => setMoves({ ...moves, Green: moves.Green + 1 })}>+1</button>
                <p>Yellow Moves = {moves.Yellow} </p>
                <button style={{ backgroundColor: "yellow", color: "white" }} onClick={() => setMoves({ ...moves, Yellow: moves.Yellow + 1 })}>+1</button>
            </div>
        </div>
    );
}