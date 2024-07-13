import "./checkBox.scss"


const CheckBox = (props : {label : string}) => {
  return (
    <div className='checkBox'>
        <input type="checkbox" />
        <label htmlFor="">{props.label}</label>
    </div>
  )
}

export default CheckBox