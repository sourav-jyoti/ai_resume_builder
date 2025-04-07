import React ,{useState} from 'react'

import { Loader2, PlusSquare } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import axios from "axios";


function Addresume() {

    const [opendialog, setopendialog]= useState(false);
    const [resumeTitle, setresumetitle] = useState('');
    const [loading, setloading] = useState(false);

    const oncreate = async () => {
        setloading(true);
        try {
            const response = await axios.post("http://localhost:3000/user/resumes", { 
                title: resumeTitle 
            });
    
            if(response){
                
                setloading(false);
                
                // Redirect to the edit page using the received ID
                window.location.href = `/${response.data._id}/EditResume`;
            }

        } catch (error) {
            console.error("Error creating resume:", error.response?.data || error.message);
            setloading(false);
        }
    };

    return (
        <div>
                <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] w-[200px] hover:scale-105 transition-all hover:shadow-md' onClick={()=>setopendialog(true)}>
                    <PlusSquare />
                </div>
            
            {/* when opendialog is true i.e when when the above div is clicked it becomes true it triggers to open the dialog    and onOpenChange is responsible for setting the opendialog to false when X is clicked or anything outside the dialog box 
            When opendialog is true, the dialog opens.
            When the user clicks outside the dialog or presses the close button (❌), onOpenChange sets opendialog to false, closing the dialog. */}

            <Dialog open={opendialog} onOpenChange={setopendialog}>
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>Add a title for your resume</DialogTitle>
                        <DialogDescription>
                            <Input className='my-5' placeholder="ex: full stack resume" onChange={(e)=> setresumetitle(e.target.value)}/>
                            {/* e = represents the event object. It contains information about the event that happened, including the input element itself.
                            e.target = refers to the HTML element that triggered the event (the input box).
                            e.target.value = retrieves the current value of the input field. */}
                        </DialogDescription>
                        <div>
                            {/*disable create button if resumeTitle is empty*/}
                            <Button disabled={!resumeTitle || loading} onClick={oncreate}>
                                {loading ? <Loader2 className='animate-spin'/>:'Create'}
                            </Button>

                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


        </div>
    )
}

export default Addresume
