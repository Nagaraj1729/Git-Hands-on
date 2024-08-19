import './App.css'
import Card from './components/Card'

function App() {

  return (
   <div className='bg-gray-900/50 h-screen text-center py-24'>
    <header className='bg-gray-300 py-4 fixed w-full top-0 font-medium tracking-widest'> Sample Header</header>
      <h1 className='text-3xl font-semibold mb-2'>Vite + React Project</h1>
      <p className='text-lg'>This is created to practice GitHub version control</p>
      <Card/>
   </div>
  )
}

export default App
