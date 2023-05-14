import React, {useState} from 'react'
import r from '../rock.png';
import p from '../paper.png';
import s from '../scissor.png';

const Game = () => {

    const [result, setResult] = useState("The result will be displayed here");
    const [indct, setIndct] = useState({borderColor: "#808080"});
    const [userSc, setUserSc] = useState(0);
    const [compSc, setCompSc] = useState(0);

    const getCompChoice = () => {
        const choices = ['rock', 'paper', 'scissor'];
        const randomNum = Math.floor(Math.random() * 3);
        return choices[randomNum];
    }

    const win = (uch, cch) => {
        setResult(`${uch}-user and ${cch}-comp. You Won`);
        setIndct({borderColor: "green"});
        setUserSc(userSc+1);
        setTimeout(() => {
            setIndct({borderColor: "#808080"});
        }, 300);
    }

    const lose = (uch, cch) => {
        setResult(`${uch}-user and ${cch}-comp. You Lost`);
        setIndct({borderColor: "red"});
        setCompSc(compSc + 1);
        setTimeout(() => {
            setIndct({borderColor: "#808080"});
        }, 300);
    }

    const draw = (uch, cch) => {
        setResult(`${uch}-user and ${cch}-comp. Draw`);
        setIndct({borderColor: "#ffa500"})
        setTimeout(() => {
            setIndct({borderColor: "#808080"});
        }, 300);
    }

    const winner = (uc) => {
        const cc = getCompChoice();

        switch(uc + cc){
            case "rockscissor":
            case "paperrock":
            case "scissorpaper":
                win(uc, cc);
                break;
            
            case "rockrock":
            case "paperpaper":
            case "scissorscissor":
                draw(uc, cc);
                break;
            
            case "rockpaper":
            case "paperscissor":
            case "scissorrock":
                lose(uc, cc);
                break;

            default:
                setResult("Wrong Choice")
        }
    }

    return (
        <div>
            <div>
                <header>
                    <h1>
                        Scissor, Papaer, Rock
                    </h1>
                </header>

                {/* <!-- 
        scoreboard
    --> */}
                <div className="score-board">
                    <div id="user-label" className="badge">User</div>
                    <span id="user-score">{userSc}</span> <span>:</span> <span id="comp-score">{compSc}</span>
                    <div id="comp-label" className="badge">Comp</div>
                </div>


                {/* <!-- 
        results
    --> */}
                <div className="result" id="result">
                    <p>{result}</p>
                </div>

                {/* <!-- 
        choices
    --> */}
                <div className="choices">
                    <div className="choice" id="scissor" onClick={() => winner("scissor")} style={indct}>
                        <img src={s} alt="scissor" />
                        <span>Scissor</span>
                    </div>

                    <div className="choice" id="paper" onClick={() => winner("paper")} style={indct}>
                        <img src={p} alt="paper" />
                        <span>Paper</span>
                    </div>

                    <div className="choice" id="rock" onClick={() => winner("rock")} style={indct}>
                        <img src={r} alt="rock" />
                        <span>Rock</span>
                    </div>
                </div>

                <div className="action">
                    Make your move
                </div>
            </div>
        </div>
    )
}

export default Game
