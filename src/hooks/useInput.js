import {useState} from 'react'
const useInput = (defaultValue) => {
    const [val, setVal] = useState(defaultValue);
    return {
        val,
        onChange: setVal
    }
}

export default useInput;
