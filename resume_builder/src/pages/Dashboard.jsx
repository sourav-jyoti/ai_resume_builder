import React , {useEffect,useState} from 'react';
import axios from 'axios';
import AddResume from '../components/ui/addresume';
import Resumecard from '../components/ui/resumecard';



function Dashboard() {

  const [resumes, setresumes] = useState([]);//initial empty array

  useEffect(() => {

    const getAllresume = async () => {
      try{
        const response = await axios.get("http://localhost:3000/resumes");
        setresumes(response.data);
      }catch(e){
        console.error("error fetching data",e);
      }
      
    };

    getAllresume();
  }, []);

  

  return (
    <div className="p-10 px-20">
      <h2 className="font-bold text-3xl mb-8">My Resumes</h2>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <AddResume />
        {/* */}
        {resumes.map((resume)=>(
          <Resumecard key={resume._id} resume={resume} />
        ))}
        
      </div>

    </div>
  );
}

export default Dashboard

{/* //pass the data to resumecard as props

        //iterate to every data and print as many resumecard as many unique resumes present .map() iterates over the response array and renders a component for each item dynamically.

        // key is used to uniquely identify each resume*/}