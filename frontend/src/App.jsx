import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Coach from './pages/Coach.jsx'
import BMI from './pages/BMI.jsx'
import Calories from './pages/Calories.jsx'
import Workouts from './pages/Workouts.jsx'
import Water from './pages/Water.jsx'
import Streaks from './pages/Streaks.jsx'
import Challenges from './pages/Challenges.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="coach" element={<Coach />} />
          <Route path="bmi" element={<BMI />} />
          <Route path="calories" element={<Calories />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="water" element={<Water />} />
          <Route path="streaks" element={<Streaks />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
