import { useContext } from 'react'
import { Context } from '../Context/GlobalContext'

const useGlobalContext = () => {
    return useContext(Context)
}

export default useGlobalContext;
