import { Navbar } from '../components/navbar'
import { Outlet } from 'react-router-dom'

function AppLayout() {

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default AppLayout
