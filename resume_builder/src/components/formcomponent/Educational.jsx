import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';

function Educational() {
  const { resumedata,setresumedata} = useContext(ResumeContext);

  return (
    <div>
      Educational
    </div>
  )
}

export default Educational
