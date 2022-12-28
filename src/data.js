import richardKennedy from '../src/assets/richard-kennedy.png'
import blackMountain from '../src/assets/JobLogo.png'
import northworks from '../src/assets/northworks.png'
import designer from '../src/assets/designer.png'

const data = [
  {
    id: 1,
    title: 'Architectural Designer',
    company: 'Black Mountain Architecture',
    location: 'Bozeman, MT',
    pay: '$50-$65/hour',
    skills: ['Rhino', 'Blender', 'Rhevit'],
    postedOn: '08/24/2022',
    image: blackMountain,
    type: 'freelance',
    tags: ['Freelance', 'On-Site', 'Long-Term'],
    applied: true,
    saved: true,
  },

  {
    id: 2,
    title: 'Project Architect',
    company: 'Richard Kennedy Architects',
    location: 'Phoenix, AZ',
    pay: '$50-$65/hour',
    skills: ['Rhino', 'Bleabeam', 'Sketchup'],
    postedOn: '08/24/2022',
    image: richardKennedy,
    type: 'freelance',
    tags: ['Freelance', 'On-Site', 'Long-Term'],
    applied: false,
    saved: true,
  },

  {
    id: 3,
    title: 'Designer',
    company: 'De Reus Architects',
    location: 'Sun Valley, CA',
    pay: '$75,000-$80,000/year',
    skills: ['Rhino', 'Blender', 'Rhevit'],
    postedOn: '08/24/2022',
    image: designer,
    type: 'freelance',
    tags: ['Freelance', 'On-Site'],
    applied: false,
  },

  {
    id: 4,
    title: 'Project Architect',
    company: 'Northworks Architects',
    location: 'Bozeman, MT',
    pay: '$80,000-$95,000/year',
    skills: ['Vray', 'Bleabeam'],
    postedOn: '08/24/2022',
    image: northworks,
    type: 'freelance',
    tags: ['Freelance', 'On-Site'],
    applied: false,
  },
]

export default data
