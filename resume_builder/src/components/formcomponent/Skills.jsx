import React, { useContext, useEffect, useState } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Button } from "@/components/ui/Button";
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { chatSession } from '../../google/Aimodel'

function Skills() {
  const { resumedata, setresumedata } = useContext(ResumeContext);

  const [skills, setskills] = useState();
  const [loading, setloading] = useState(false);
  const { resumeid } = useParams();

  //when textarea changes below code runs and the resumedata is updated
  useEffect(() => {
    setresumedata({
      ...resumedata,
      skills: skills
    })
  }, [skills]);


  const onSave = () => {
    if (resumedata?.skills?.length > 0) {
      uploaddata();
    }
    else {
      toast("enter skills")
    }

  }

  const uploaddata = async () => {
    setloading(true);
    try {
      const response = await axios.put(`http://localhost:3000/user/resumes/${resumeid}`, {
        skills: resumedata.skills,
      });

      if (response.status === 200) {
        setloading(false);
        toast("skills updated");
      }
    } catch (e) {
      console.error("Error uploading data", e);
      setloading(false);
    }

  }

  const GenerateAiSkills = async () => {

    //** 
    const formattedExperience = resumedata?.experience?.map((exp, index) => {
      return `(${index + 1})
      Title: ${exp.title}
      Company: ${exp.companyName}
      Project: ${exp.projectName}
      Summary: ${exp.workSummery}
      `;
    }).join("\n\n");

    const prompt = `Extract  relevant 4-4 tech skills based on the experience the format of the data is give below.
                    Only output a clean HTML list using <ul> and <li> tags — no backticks, no code blocks, no explanation, no formatting hints, and ensure the output does not end with "\`\`\`html" or "\`\`\`".
                    ${formattedExperience}
                    condition : include tech related skills 
                    condition : list should in the following format 
                    programmin lang = add 3 hypothetical language , databases = add 3 db lang,
                    any other category as you find relevant you are free to add hypothetical categories`;
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text())
    setskills(result.response.text());
    setloading(false);
  }

  const convertHTMLToText = (html) => {
    return html
      .replace(/<\/?ul>/g, '')                     // Remove <ul> and </ul>
      .replace(/<li>(.*?)<\/li>/g, '• $1')         // Replace <li>content</li> with • content
      .trim();                                     // Clean leading/trailing whitespace
  }


  return (
    <div>
      <div className='col-span-2 '>
        <Button variant="outline" type="button" size="sm" className="border-primary text-primary flex my-5" onClick={() => GenerateAiSkills()}>
          Generate from AI based on your experience
        </Button>

        <Textarea onChange={(e) => setskills(e.target.value)} required value={convertHTMLToText(resumedata?.skills ?? '')} />

      </div>
      <div>
        <Button disabled={loading} onClick={() => onSave()} className="mt-2">
          {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
        </Button>
      </div>
    </div>
  )
}

export default Skills

{
  /**    
   * //since we are generating the skills based on the experience stored and since it is array which if we pass to gemini it will in the form object object so we to convert it into string
    //eg:

    [
  {
    title: "Frontend Developer",
    companyName: "TechCorp",
    ...
  },
  {
    title: "Backend Developer",
    companyName: "CodeWorks",
    ...
  }

  //(1)
    Title: Frontend Developer
    Company: TechCorp
    ...

    (2)
    Title: Backend Developer
    Company: CodeWorks
    ...
 
  */

    /**
     * in the skills.jsx when we enter something in the text area the html format gets disrupted
     */
}