import {useState} from 'react'
const board = {0 : "_", 1 : "_" , 2 : "_", 3 : "_", 4 : "_",5 : "_",6 : "_", 7 : "_", 8 : "_"}
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
    const [toeboard, setToeboard] = useState(board)
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
        let newCopy = Object.assign({},toeboard)
        setToeboard(newCopy)
        marker === "X" ? setMarker("O") : setMarker("X")
        if(checkWin()){
            setWin(`player ${marker} wins`)
            return
        }
        if (!Object.values(toeboard).includes("_")){
            setWin("tie")
        }
    }
    function clearBoard(){
        setToeboard({0 : "_", 1 : "_" , 2 : "_", 3 : "_", 4 : "_",5 : "_",6 : "_", 7 : "_", 8 : "_"})
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
        <div className ="min-vh-100 p-5">
            <div className = "container text-center p-5">
            {win === null ? <div className = "container">it is player {marker}'s turn</div> : <div className = "container">{win}</div>}
            <div className = "toegrid flex-center">
            {Object.entries(toeboard).map(([key,value]) => <button key = {key} onClick = {() => markBoard(key)} >{value}</button>)}
            </div>
            </div>
        </div>
    )
}
