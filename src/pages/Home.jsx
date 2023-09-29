import { Link } from 'react-router-dom'

const Home = () => (
  <h1 className='text-3xl font-bold underline'>
    Hello world!
    <br />
    <Link to='/about'>about</Link>
    <br />
    <Link to='/detail'>detail</Link>
  </h1>
)

export default Home
