import { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
export function load(name: string) {
    const Page = lazy(() => import(`../Page/${name}`))
    return <Page></Page>
}
const staticRoutes: RouteObject[] = [
    { path: '', element: load('Home.tsx') },
    { path: 'WorkExperience', element: load('WorkExperience.tsx') },
]
export function Router() {
    return useRoutes(staticRoutes)
}

export default observer(Router)