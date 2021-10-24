import {useState} from 'react'
const board = {0 : " ", 1 : " " , 2 : " ", 3 : " ", 4 : " ",5 : " ",6 : " ", 7 : " ", 8 : " "}
const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
export default function tictac() {
    const [toeboard, setToeboard] = useState({...board})
    const [win,setWin] = useState(null)
    const [marker, setMarker] = useState("X")
    function markBoard(id) {
        if (win !== null){
            clearBoard()
            return
        }
        if(toeboard[id] === "X" || toeboard[id] === "O"){
            return
        }
        toeboard[id] = marker
        setToeboard({...toeboard})
        marker === "X" ? setMarker("O") : setMarker("X")
        if(checkWin()){
            setWin(`Player ${marker} Wins!`)
            return
        }
        if (!Object.values(toeboard).includes(" ")){
            setWin("Tie")
        }
    }
    function clearBoard(){
        setToeboard({...board})
        setWin(null)
        setMarker("X")
    }
    function checkWin(){
        const state1 = "XXX"
        const state2 = "OOO"
        for (let i = 0 ; i < possibleLines.length; i++){
            let tmp = toeboard[possibleLines[i][0]] + toeboard[possibleLines[i][1]] + toeboard[possibleLines[i][2]]
            if (tmp === state1 || tmp === state2){
                return true
            }
        }
        return false
    }

    return (
        <div className ="min-vh-50">
            <div className = "container text-center p-5 w-50">
            <h1>Tic Tac Toe</h1>
            <hr className = "w-100"></hr>
            {win === null ? <div className = "container"><h2>It Is Player {marker}'s Turn</h2></div> : <div className = "container"><h2>{win}</h2></div>}
            <div className = "toegrid flex-center z-depth-3">
            {Object.entries(toeboard).map(([key,value]) => <div className = "board-item" key = {key} onClick = {() => markBoard(key)} >{value}</div>)}
            </div>
            </div>
        </div>
    )
}
