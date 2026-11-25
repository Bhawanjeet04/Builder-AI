import { useSandpack } from '@codesandbox/sandpack-react'
import React, { useEffect } from 'react'

const SandpackErrorMonitor = ({ onErrorChange }) => {
    const { sandpack } = useSandpack()
    const { error } = sandpack;

    useEffect(() => {
        onErrorChange(true)
    }, [error, onErrorChange])
    return null
}

export default SandpackErrorMonitor
