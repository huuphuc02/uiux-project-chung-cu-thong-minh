import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    (async () => {
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
      Home
    </div>
  )
}

export default Home