import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  // const apiurl = 'http://localhost:8002'
  const apiurl = 'https://digital-wellness-brown.vercel.app'
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (username, email, password,image,desc) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch( apiurl + '/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, email, password ,image, desc})
    })
    const json = await response.json()
    console.log(json)

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}