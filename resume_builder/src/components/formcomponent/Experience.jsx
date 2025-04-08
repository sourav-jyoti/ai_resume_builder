import React, { useContext, useEffect, useState } from 'react'
import { ResumeContext } from '../../../context/ResumeContext';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useParams } from 'react-router-dom'
import { chatSession } from '../../google/Aimodel'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

export default function Experience() {
  const { resumedata, setresumedata } = useContext(ResumeContext);
  const [experinceList, setExperinceList] = useState([]);
  const params = useParams();
  const [loading, setloading] = useState(false);

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
          {experinceList.map((item, index) => (
            <div key={index}>
              <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                <div>
                  <label className='text-xs'>Position Title</label>
                  <Input name="title" onChange={(event) => handleChange(index, event)} defaultValue={item?.title}/>
                </div>
                <div>
                  <label className='text-xs'>Company Name</label>
                  <Input name="companyName" onChange={(event) => handleChange(index, event)} defaultValue={item?.companyName} />
                </div>
                <div>
                  <label className='text-xs'>City</label>
                  <Input name="city" onChange={(event) => handleChange(index, event)} defaultValue={item?.city} />
                </div>
                <div>
                  <label className='text-xs'>State</label>
                  <Input name="state" onChange={(event) => handleChange(index, event)} defaultValue={item?.state}
                  />
                </div>
                <div>
                  <label className='text-xs'>Start Date</label>
                  <Input type="date" name="startDate" onChange={(event) => handleChange(index, event)} defaultValue={item?.startDate} />
                </div>
                <div>
                  <label className='text-xs'>End Date</label>
                  <Input type="date" name="endDate" onChange={(event) => handleChange(index, event)} defaultValue={item?.endDate}/>
                </div>
                <div className='col-span-2'>
                  {/* Work Summery  */}
                  <RichTextEditor
                    index={index}
                    defaultValue={item?.workSummery}
                    onRichTextEditorChange={(event) => handleRichTextEditor(event, 'workSummery', index)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
            <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>
          </div>

          <Button disabled={loading} onClick={() => onSave()}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  )
}
