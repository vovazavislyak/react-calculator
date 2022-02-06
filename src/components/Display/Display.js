import "./Display.css";

const Display = (props) => {
    const fontSize = props.secondRow.length >= 15 ? 20 : 36;

    return (
        <div className={"display"}>
            <div className={"first-row"}>
                {props.firstRow}
            </div>
            <div
                className={"second-row"}
                style={{fontSize: fontSize}}
            >
                {props.secondRow}
            </div>
        </div>
    );
}

export default Display;