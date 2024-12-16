import TestLogo from '../../public/TestLogo.svg'
import threedot from '../../public/threedot.svg'
import setting from '../../public/setting.svg'
import docImage from '../../public/docImage.png'

import { NavLinks } from '../constants'

function Navbar() {
  return (
    <div className='flex justify-between bg-white px-8 py-3 rounded-full'>
      <img src={TestLogo} alt="Tech care" className="w-[211px] h-[48px]" />
      <div className='flex gap-7'>
        {
          NavLinks.map((navlink) => {
            return (
              <div 
                className={`flex gap-1 px-3 items-center rounded-full ${navlink.text === 'Patients' && 'bg-activeTeal'}`}
              >
                <img src={navlink.logo} alt='logo' className='w-[19px] h-[17px]'/>
                <p className='text-sm'>{navlink.text}</p>
              </div>
            )
          })
        }
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex gap-2'>
          <img src={docImage} alt="profile picture" className='size-11'/>
          <div className='flex flex-col'>
            <p className='text-sm'>Dr. Jose Simmons</p>
            <p className='text-sm text-lightGray'>General Practitioner</p>
          </div>
        </div>
        <div className="inline-block w-[1px] h-full bg-dividerGray" />
        <div className='flex gap-2'>
          <img src={setting} alt="settings" className='w-[19px] h-5'/>
          <img src={threedot} alt="menu" className='w-[19px] h-5'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar