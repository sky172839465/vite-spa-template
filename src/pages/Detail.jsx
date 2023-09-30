import { Link } from 'react-router-dom'
import useGithubRepo from '../hooks/useGithubRepo'

const Detail = () => {
  const { data, isLoading, isError } = useGithubRepo()

  if (isLoading) {
    return (<p>loading detail</p>)
  }

  if (isError) {
    return (<p>error detail</p>)
  }

  return (
    <>
      <h1 className='text-3xl font-bold underline'>
        Hello Detail!
        <br />
        <Link to='../'>home</Link>
        <br />
      </h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}

export default Detail
