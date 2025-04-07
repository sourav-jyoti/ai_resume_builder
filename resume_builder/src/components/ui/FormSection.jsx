import React, { useContext,useState } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Button } from "../../components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Educational from "../formcomponent/Educational";
import Experience from "../formcomponent/Experience";
import PersonalDetail from "../formcomponent/PersonalDetail";
import Skills from "../formcomponent/Skills"
import Summery from "../formcomponent/Summery"

function FormSection() {

  const [sectionindex, setsectionindex] = useState(1);
  const [enableNext,setEnableNext]=useState(false);

  return (
    <div>
      <div className='flex justify-between mt-5'>
        <Button variant="outline">Theme</Button>
        <div className='flex gap-1'> 

          {sectionindex>1 && <Button onClick={()=>setsectionindex(curr => curr - 1)} >  <ArrowLeft />Prev</Button>}{/**1 */}

          <Button disabled={!enableNext} onClick={()=>setsectionindex(curr => curr + 1 )}><ArrowRight />Next</Button>
          
        </div>
      </div>

      {sectionindex == 1 && <PersonalDetail setEnableNext={setEnableNext}/>}
      {sectionindex == 2 && <Educational />}
      {sectionindex == 3 &&<Summery />}
      {sectionindex == 4 &&<Experience />}
      {sectionindex == 5 &&<Skills />}

    </div>

  )
}

export default FormSection



{/**- next and prev button
    
function : to go to next section and prev section 
    
   initially prev button will be invisible when next is clicked once it will be visible
    
    so to achieve maintain a useState with count 1 when 1 don’t show prev if >1 show it 
    
    const [sectionindex, setsectionindex] = useState(1);
    return (
    {sectionindex>1 && <Button>Prev</Button>}
    )
    when the firstpart i.e sectionindex>1 is true than second part will be evaluated as && is used
    
    */} 
