import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorElement from './ErrorElement.jsx'

const withErrorElement = (routes) => routes.map((route) => ({
  ...route,
  errorElement: <ErrorElement />
}))

const Router = (props) => {
  const { routes } = props
  const router = createBrowserRouter(withErrorElement(routes))
  return (
    <RouterProvider router={router} />
  )
}

export default Router
