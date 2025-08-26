import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === 'mypassword123') {  // Change this to your password
      localStorage.setItem('authenticated', 'true')
      router.push('/')
    } else {
      alert('Wrong password')
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>Private Site Access</h1>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', margin: '10px', fontSize: '16px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Enter Site
        </button>
      </form>
    </div>
  )
}
