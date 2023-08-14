import Header from './components/Header'
import Options from './components/Options'
import UserInfo from './components/UserInfo'

import { ThemeProvider } from './context/ThemeContext'

export default function App () {
  return (
    <>
      <ThemeProvider>
        <main className='w-screen mr-auto flex-col flex grow ml-auto query'>
          <Header />
          <div>
            <UserInfo />
          </div>
          <Options />
        </main>
      </ThemeProvider>
    </>
  )
}
