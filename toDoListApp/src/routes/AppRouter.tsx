
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Administration } from '../components/screens/Administration/Administration'

export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={
                <Administration/>
            }/>
        </Routes>
    </BrowserRouter>
  )
}
