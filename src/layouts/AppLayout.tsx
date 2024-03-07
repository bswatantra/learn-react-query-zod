import { Navbar } from '../components/navbar'
import { Outlet } from 'react-router-dom'

function AppLayout() {

  return (
    <main>
      <Navbar />
      <div className="max-w-5xl mx-auto px-8 py-10">
        <Outlet />
      </div>
    </main>
  )
}

export default AppLayout
