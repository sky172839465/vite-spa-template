import { Suspense, lazy } from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { isEmpty } from 'lodash-es'
import ErrorElement from './ErrorElement.jsx'

const pages = import.meta.glob('../../pages/*.jsx')

const dynamicRoutes = Object.entries(pages).map(([path, page]) => {
  const componentName = path.split('/').pop().replace(/.jsx$/, '')
  const routePath = componentName === 'Home' ? '/' : `/${componentName.toLowerCase()}`
  const Component = lazy(page)
  return {
    path: routePath,
    element: <Component />
  }
})

const withErrorElement = (routes) => routes.map(({ children, ...route }) => (
  {
    ...route,
    ...(!isEmpty(children) && { children: withErrorElement(children) }),
    errorElement: <ErrorElement />
  }
))

const routes = withErrorElement([
  ...dynamicRoutes
])

const Router = () => {
  const router = createBrowserRouter(withErrorElement(routes))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Router
