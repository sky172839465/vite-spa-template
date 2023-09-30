import { Link } from 'react-router-dom'

const Home = () => (
  <h1 className='text-3xl font-bold underline'>
    Hello world!
    <button
      type='button'
      className='inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900'
    >
      Button
    </button>
    <br />
    <Link to='/about'>about</Link>
    <br />
    <Link to='/detail'>detail</Link>
  </h1>
)

export default Home
