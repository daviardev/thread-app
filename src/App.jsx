import Header from './components/Header'
import UserInfo from './components/UserInfo'

import { ThemeProvider } from './context/ThemeContext'

export default function App () {
  return (
    <>
      <ThemeProvider>
        <main>
          <Header />
          <div>
            <UserInfo />
          </div>
        </main>
      </ThemeProvider>
    </>
  )
}
