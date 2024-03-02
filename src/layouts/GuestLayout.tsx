import { Outlet } from 'react-router-dom'

function GuestLayout() {

    return (
        <main className='flex flex-col items-center justify-center min-h-screen'>
            <Outlet />
        </main>
    )
}

export default GuestLayout
