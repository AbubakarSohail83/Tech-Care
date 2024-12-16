import Calendar from '../public/calendar.svg'
import Credit from '../public/credit.svg' 
import Chat from '../public/chat.svg' 
import Group from '../public/group.svg' 
import Home from '../public/home.svg'
import ryan from '../public/patients/ryan.png' 
import emily from '../public/patients/emily.png' 
import brandon from '../public/patients/brandon.png' 
import jessica from '../public/patients/jessica.png' 
import samantha from '../public/patients/samantha.png' 
import olivia from '../public/patients/olivia.png' 
import tyler from '../public/patients/tyler.png' 
import kevin from '../public/patients/kevin.png' 
import dylan from '../public/patients/dylan.png' 
import ashley from '../public/patients/ashley.png' 
import nathan from '../public/patients/nathan.png' 
import mike from '../public/patients/mike.png' 

export const NavLinks = [
  {text: 'Overview', logo: Home},
  {text: 'Patients', logo: Group},
  {text: 'Schedule', logo: Calendar},
  {text: 'Message', logo: Chat},
  {text: 'Transactions', logo: Credit}
]

export const Patients = [
  {
    name: 'Emily Williams',
    sex: 'Female',
    age: 18,
    photo: emily
  },
  {
    name: 'Ryan Johnson',
    sex: 'Male',
    age: 45,
    photo: ryan
  },
  {
    name: 'Brandon Mitchell',
    sex: 'Male',
    age: 36,
    photo: brandon
  },
  {
    name: 'Jessica Taylor',
    sex: 'Female',
    age: 28,
    photo: jessica
  },
  {
    name: 'Samantha Johnson',
    sex: 'Female',
    age: 56,
    photo: samantha
  },
  {
    name: 'Ashley Martinez',
    sex: 'Female',
    age: 54,
    photo: ashley
  },
  {
    name: 'Olivia Brown',
    sex: 'Female',
    age: 32,
    photo: olivia
  },
  {
    name: 'Tyler Davis',
    sex: 'Male',
    age: 19,
    photo: tyler
  },
  {
    name: 'Kevin Anderson',
    sex: 'Male',
    age: 30,
    photo: kevin
  },
  {
    name: 'Dylan Thompson',
    sex: 'Male',
    age: 36,
    photo: dylan
  },
  {
    name: 'Nathan Evans',
    sex: 'Male',
    age: 58,
    photo: nathan
  },
  {
    name: 'Mike Nolan',
    sex: 'Male',
    age: 31,
    photo: mike
  }
]