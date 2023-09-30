import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='bg-red-600'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorElement
