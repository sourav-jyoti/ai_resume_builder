import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

export default function Summery() {
  const { resumedata,setresumedata} = useContext(ResumeContext);

  return (
    <div>
      summery
    </div>
  )
}
