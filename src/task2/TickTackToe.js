
import './TickTackToe.css';
import { useState } from "react";

function TickTackToe() {

    const [turn, setTurn] = useState(false);
    const [tickTock, setTickTock] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [winner, setWinner] = useState(0);

    const winningSetup = [
        [1, 2, 3], [4, 5, 6], [0, 7, 8], [1, 4, 7], [2, 5, 8], [3, 6, 0], [0, 1, 5], [3, 5, 7]
    ]

    function getPoint(a, i) {
        if (a !== 1 && a !== 2 & winner === 0) {
            let tmpArr = [...tickTock];
            tmpArr[i] = turn ? 1 : 2;
            setTickTock(tmpArr);
            checkScore(tmpArr);
            setTurn(!turn);
        }
    }

    function restState() {
        setTickTock([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        setWinner(0);
    }

    function checkSingleFact(i, user, arr) {
        if (arr[winningSetup[i][0]] === user && arr[winningSetup[i][1]] === user && arr[winningSetup[i][2]] === user) {
            setWinner(user);
        } else {
            if (i < 7) {
                checkSingleFact(i + 1, user, arr);
            }
        }
    }

    function checkScore(tmpArr) {
        let userTurn = turn ? 1 : 2;
        checkSingleFact(0, userTurn, tmpArr)
    }

    return (
        <div className="wrapper">
            <div className="turn">
                whose turn: {turn ? 'O' : 'X'}
                <br />
            </div>
            <div className="parent">
                {tickTock.map((answer, i) => {
                    return (<div className={`div${i}`}><div className={`ceil ${answer === 1 ? 'redPoint' : answer === 2 ? 'greenPoint' : 'empty'}`}
                        onClick={() => getPoint(answer, i)}>{answer === 1 ? 'O' : answer === 2 ? 'X' : ''}</div> </div>)
                })}
            </div>

            <div className="flex">
                <div className="result">

                    {winner === 1 ? 'Winner: O' : winner === 2 ? 'Winner: X' : ' '}
                </div>
                <div className="resetButton" onClick={() => restState()}>
                    reset
                </div>
            </div>
        </div>
    );
}

export default TickTackToe;
