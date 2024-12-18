import { useState } from 'react'
import './Button.css'

//équivalent à : const Button = () => {}

function Button({count, action}) {
      // count est le geteur , et setCount est le seteur 

    // const [count, setCount] = useState(0)

    
    // return <button className={color} onClick={() => setCount((count) => count +1)}>count is {count}</button>
    return <button onClick={action}>{count}</button>
}



export default Button