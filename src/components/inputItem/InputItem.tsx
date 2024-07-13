import "./inputItem.scss"


const InputItem = (props : any) => {
    return (
        <div className="input-item">
            <input {...props.register(props.name)} type={props.type} placeholder={props.placeholder} />
            {props.error && <span className="error-msg">{props.error}</span>}
        </div>
    )
}

export default InputItem