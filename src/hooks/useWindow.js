import { useEffect, useState } from 'react';

export default function useWindow() {

    const [windowSize, setWindowSize] = useState({
        height: 0,
        width: 0
    })

    const [isMobileWindow, setIsMobileWindow] = useState(false)

    useEffect(() => {
        console.log('useEffect')
        function handleResize() {
            console.log('handleResize')
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            })

            setIsMobileWindow(window.innerWidth < 480)

        }
        console.log('useEffect 1')
        window.addEventListener('resize', handleResize)
        console.log('useEffect 2')
        handleResize()
        console.log('useEffect 3')
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { isMobileWindow, windowSize }
}