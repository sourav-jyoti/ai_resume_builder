import React from 'react'
import { Link} from 'react-router-dom'

function Resumecard  ({resume}) {
  return (

    <Link to ={"/" + resume._id +"/EditResume"}>
    <div>
        <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] w-[200px] hover:scale-105 transition-all hover:shadow-md'>
              <div className='flex items-center justify-center h-[180px] '>
                {/* Add an image if required */}
              </div>
        </div>
        <div className='border p-3 flex justify-between  text-black rounded-b-lg shadow-lg'>
          <h2 className='text-sm'>{resume?.title}</h2>
        </div>
    </div>
    </Link>
  ) 
}

export default Resumecard
