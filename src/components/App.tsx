import Navbar from "./Navbar"
import PatientsLog from "./PatientsLog"
import PatientsDashboard from "./PatientsDashboard"

function App() {
  return (
    <div className="min-h-screen bg-backgroundGray p-[18px]">
      <Navbar />
      <div className="flex flex-col">
        <PatientsLog />
        <PatientsDashboard patient={{}} />
      </div>
    </div>
  )
}

export default App
