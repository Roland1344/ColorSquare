interface BoxProps {
    color: string;
    count: number;
    setFn : () => void;
}
const BoxComp: React.FC<BoxProps> = ({ color, count, setFn }) => {
    return (
        <div
            className="box"
            style={{ width: "7rem", height: "7rem", boxShadow: "0 0 10px 3px rgba(0,0,0,.5) inset", borderRadius: "10px", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}
            onClick={setFn}
        >
            {count}
        </div>

    )
}

export default BoxComp