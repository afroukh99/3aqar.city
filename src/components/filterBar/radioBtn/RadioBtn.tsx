import { useState } from "react"
import "./radioBtn.scss"


const numbers = [1, 2, 3, 4, 5]


const RadioBtn = (props: { label: string }) => {
    const [query, setquery] = useState(0);



    const handleClick = (number: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setquery(number);
    };


    return (
        <div className='radio'>
            <label htmlFor="">{props.label}</label>
            <div className="wrapper">
                {
                    numbers.map(number => (
                        <button
                            key={number}
                            onClick={(e) => handleClick(number, e)}
                            className={`${query === number && 'active'} `}>{number}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default RadioBtn