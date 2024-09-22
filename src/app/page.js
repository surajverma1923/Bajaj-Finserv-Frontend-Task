import ApiForm from '@/components/apiForm'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50'>
            <div className='text-4xl font-extrabold text-blue-700 mb-8'>
            Welcome to Bajaj Finserv Health Dev Challenge
            </div>
            <div className='w-full max-w-lg p-4 bg-white rounded-lg shadow-lg'>
                <ApiForm />
            </div>
        </main>
    )
}
