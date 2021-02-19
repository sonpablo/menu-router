import { useEffect, useState } from 'react';

export default function useWindow() {

    const [windowSize, setWindowSize] = useState({
        height: 0,
        width: 0
    })

    const [isMobileWindow, setIsMobileWindow] = useState(false)

    useEffect(() => {

        function handleResize() {

            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            })

            setIsMobileWindow(window.innerWidth < 480)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { isMobileWindow, windowSize }
}