import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function useUser() {

    const value = useContext(UserContext)

    return value
}
