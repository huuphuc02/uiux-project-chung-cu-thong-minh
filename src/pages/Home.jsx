import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomePage from './resident/HomePage'

function Home() {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    (async () => {
      localStorage.setItem('chung-cu-user', 'hihi')
      if (!localStorage.getItem('chungcu-user')) {
        navigate('/login')
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem('chungcu-user')))
      }
    })()
      .catch(console.error)
  }, [currentUser])

  return (
    <div className="container">
      <HomePage/>
    </div>
  )
}

export default Home