import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

function Skills() {
    const { resumedata,setresumedata} = useContext(ResumeContext);

  return (
    <div>
      skills
    </div>
  )
}

export default Skills
