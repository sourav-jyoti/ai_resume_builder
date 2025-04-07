import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

export default function Experience() {
  const { resumedata,setresumedata} = useContext(ResumeContext);

  return (
    <div>
      Experience
    </div>
  )
}
