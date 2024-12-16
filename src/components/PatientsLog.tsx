import search from "../../public/search.svg"
import threedot from "../../public/threedot.svg"
import { Patients } from "../constants"

function PatientsLog() {
  return (
    <div className="w-[367px] py-7 px-5 bg-white max-h-[900px] overflow-scroll rounded-xl my-8">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-extrabold">Patients</p>
        <img src={search} alt="search" className="size-[18px]" />
      </div>
      <div>
        {
          Patients.map((patient) => {
            return (
              <div 
                className={`${patient.name === 'Jessica Taylor' && 'bg-activeSeaGreen mx-[-20px] !pl-10 !pr-8'}
                             flex text-sm justify-between items-center py-4 pl-5 pr-4`
                          }
              >
                <div className="flex gap-3">
                  <img src={patient.photo} alt="photo" className="size-12" />
                  <span className="flex flex-col">
                    <p>{patient.name}</p>
                    <p className="text-lightGray">{patient.sex}, {patient.age}</p>
                  </span>
                </div>
                <img src={threedot} alt="menu" className="rotate-90"/>
              </div>
            )})
        }
      </div>
    </div>
  )
}

export default PatientsLog