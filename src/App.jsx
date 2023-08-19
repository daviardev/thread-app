import { useState, useEffect } from 'react'

import Feed from './components/Feed'
import Header from './components/Header'
import Options from './components/Options'
import UserInfo from './components/UserInfo'
import InputPost from './components/InputPost'

import { ThemeProvider } from './context/ThemeContext'

export default function App () {
  const [user, setUser] = useState(null)

  const [threads, setThreads] = useState(null)
  const [filterThreads, setFilterThreads] = useState(null)
  const [viewThreadFeed, setViewThreadFeed] = useState(true)

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

  const getThreads = async () => {
    try {
      const res = await fetch(`http://localhost:3000/threads?=${userId}`)
      const data = await res.json()
      setThreads(data)
    } catch (err) {
      console.error(err)
    }
  }

  const getThreadsFeed = () => {
    if (viewThreadFeed) {
      const standThreads = threads?.filter(thread => thread.repply_to === null)
      setFilterThreads(standThreads)
    }

    if (!viewThreadFeed) {
      const replyThreads = threads?.filter(thread => thread.repply_to !== null)
      setFilterThreads(replyThreads)
    }
  }

  useEffect(() => {
    getUser()
    getThreads()
  }, [])

  useEffect(() => {
    getThreadsFeed()
  }, [user, threads, viewThreadFeed])
  return (
    <>
      {user && (
        <ThemeProvider>
          <main className='w-screen screen mr-auto flex-col flex grow ml-auto md:pl-3 md:pr-3 md:max-w-[620px]'>
            <Header />
            <InputPost user={user} />
            <UserInfo user={user} />
            <Options
              viewThreadFeed={viewThreadFeed}
              setViewThreadFeed={setViewThreadFeed}
            />
            <Feed
              user={user}
              filterThreads={filterThreads}
            />
          </main>
        </ThemeProvider>
      )}
    </>
  )
}
