import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { NewClient } from "../pages/NewClient"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-client" element={<NewClient />} />
    </Routes>
  )
}
