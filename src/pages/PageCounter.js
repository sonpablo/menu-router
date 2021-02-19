import React, { useEffect, useState } from 'react'

export default function PageCounter() {

    const [counter, setCounter] = useState(0)
    const [subtractButtonState, setSubtractButtonState] = useState(true)

    useEffect(() => {
        setSubtractButtonState(counter === 0)
    }, [counter])

    const plusCounter = () => {
        setCounter(prevValue => prevValue + 1)
    }

    const subtractCounter = () => {
        setCounter(prevValue => prevValue - 1)
    }

    return (
        <>
            <h1>Counter Page</h1>
            <h2 data-testid='counter'>{counter}</h2>
            <button
                data-testid='add-button'
                onClick={plusCounter}>Add</button>
            <button
                disabled={subtractButtonState}
                data-testid='subtract-button'
                onClick={subtractCounter}>Subtract</button>
        </>
    )
}