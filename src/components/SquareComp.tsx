import { useState } from "react";
import BoxComp from "./BoxComp";


const SquareComp = () => {

    const [color, setColor] = useState<string>("rgba(255, 255, 255, 1)");
    const [count, setCount] = useState<number>(0)

    const randomNum = () => Math.floor(Math.random() * 256);

    const randomColor = (): string => {
        const r = randomNum();
        const g = randomNum();
        const b = randomNum();
        return `rgb(${r},${g},${b})`
    }

    const setBoxColor = () => setColor(randomColor());
    const setBoxCount = () => setCount(prev => prev === 10 ? 0 : prev + 1)


    return (
        <main style={{ display: "flex", flexDirection: "column", background: "rgb(200,200,200)", height: "100vh", justifyContent: "center", alignItems: "center", gap: "2rem", fontFamily: "Arial" }}>

            <h2>A szín kódja: {color}</h2>

            {/* <div
                className="box"
                style={{ width: "7rem", height: "7rem", boxShadow: "0 0 10px 3px rgba(0,0,0,.5) inset", borderRadius: "10px", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}
                onClick={() => setCount(prev => prev + 1)}
            >
                {count}
            </div> */}
            <div className="row" style={{display: "flex", gap: "1rem"}}>
                <BoxComp color={color} count={count} setFn={setBoxCount} />
                <BoxComp color={color} count={count} setFn={setBoxCount} />
                <BoxComp color={color} count={count} setFn={setBoxCount} />
            </div>

            <button
                style={{ borderRadius: "10px", background: color, padding: ".4rem .6rem", fontSize: "1.1rem", border: "none" }}
                onClick={setBoxColor}
            >

                Színezz!

            </button>
            <button
                style={{ borderRadius: "10px", padding: ".4rem .6rem", fontSize: "1.1rem", background: "red", border: "none" }}
                onClick={(() => {
                    setCount(0);
                    setColor("rgba(255, 255, 255, 1)");
                })}
            >
                Reset!
            </button>
        </main>
    )
};

export default SquareComp;