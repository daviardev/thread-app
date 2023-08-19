import { useState, useEffect } from 'react'

import Header from './components/Header'
import Thread from './components/Thread'
import Options from './components/Options'
import UserInfo from './components/UserInfo'
import InputPost from './components/InputPost'

import { ThemeProvider } from './context/ThemeContext'

export default function App () {
  const [user, setUser] = useState(null)
  const userId = '9883c310-dcff-493c-9be4-f991cce51b9d'

  const getUser = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users?user_uuid=${userId}`)
      const data = await res.json()
      setUser(data[0])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      {user && (
        <ThemeProvider>
          <main className='w-screen screen mr-auto flex-col flex grow ml-auto md:pl-3 md:pr-3 md:max-w-[620px]'>
            <Header />
            <InputPost user={user} />
            <UserInfo user={user} />
            <Options />
            <Thread />
          </main>
        </ThemeProvider>
      )}
    </>
  )
}
