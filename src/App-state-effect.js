// https://www.robinwieruch.de/react-pass-props-to-component/
import * as React from 'react'

const App = () => {
    // timer (effect)
    const [isOn, setIsOn] = React.useState(false)
    // toggle
    const greeting = 'Welcome to React'
    const [isShow, setShow] = React.useState(true)
    const handleToggle = () => {
        setShow(!isShow)
    }
    // counter
    const [count, setCount] = React.useState(0)
    const handleIncrease = () => {
        setTimeout(() => setCount((state) => state + 1), 1000)
    }
    const handleDecrease = () => {
        setTimeout(() => setCount((state) => state - 1), 3000)
    }

    return (
        <div>
            <button onClick={handleToggle} type='button'>
                Toggle
            </button>
            {isShow ? <Welcome text={greeting} /> : null}
            Count: {count}
            <hr />
            {/* https://www.robinwieruch.de/react-usestate-hook/ */}
            {/*
            ..................... Counter (useState) .......................
            */}
            <div>
                <button type='button' onClick={handleIncrease}>
                    Increase
                </button>
                <button type='button' onClick={handleDecrease}>
                    Decrease
                </button>
            </div>
            {/* https://www.robinwieruch.de/react-hooks/#:~:text=REACT%20USEEFFECT%20HOOK */}
            {/*
            ..................... Timer (useEffect) .......................
            */}
            {!isOn && (
                <button type='button' onClick={() => setIsOn(true)}>
                    Start
                </button>
            )}
            {isOn && (
                <button type='button' onClick={() => setIsOn(false)}>
                    Stop
                </button>
            )}
        </div>
    )
}

const Welcome = ({ text }) => {
    return <h1 style={{ color: 'midnightblue' }}>{text}</h1>
}

export default App