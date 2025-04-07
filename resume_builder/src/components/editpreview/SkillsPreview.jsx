import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

export default function SkillsPreview() {
  const { resumedata} = useContext(ResumeContext);

  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2' style={{ color:resumedata?.themeColor}}>Skills</h2>
    <hr style={{borderColor:resumedata?.themeColor}} />

    <div className='grid grid-cols-2 gap-3 my-4'>
        {resumedata?.skills?.map((skill,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-xs'>{skill.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}
