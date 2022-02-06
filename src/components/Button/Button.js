import "./Button.css";

const Button = (props) => {
  return (
      <div className={"button"} onClick={props.onClick}>
          <p className={"button-text"}>
              {props.text}
          </p>
      </div>
  )
};

export default Button;