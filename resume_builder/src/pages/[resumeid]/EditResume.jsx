import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import FormSection from "../../components/ui/FormSection";
import ResumePreview from "../../components/ui/ResumePreview";

import {ResumeContext} from "../../../context/ResumeContext";

// import dummy from "../../../dummydata"; 

// Context Provider Wrapper Component
const ResumeProvider = ({ children }) => {
  const [resumedata, setresumedata] = useState(null);
  const { resumeid } = useParams();//1

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/resumes/${resumeid}`);
        setresumedata(response.data);
      } catch (error) {
        
        
      }
    };

    fetchResume();
  }, []);

  return (
    <ResumeContext.Provider value={{ resumedata, setresumedata }}>
      {children}
    </ResumeContext.Provider>
  );
};

// Main Component
function EditResume() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      {/* 3 */}
      <ResumeProvider>
        <FormSection />
        <ResumePreview />
      </ResumeProvider>
    </div>
  );
}

export default EditResume;




{/*1. i have to extract the id from the address when page loads and it should be only once when it loads i.e when the id changes so use useeffect*/}
{/* 2. write clear function logic in useEffect if needed */}
{/* 3. Pass setresumedata to update resume in real-time */}
 



