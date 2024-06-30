"use client"
import { useParams } from "next/navigation"
export default function TestOptionalCIR() {
    const param = useParams();
    const all = param.option || [];
    
       
            if(all.length === 1 ) {
                return(<div>Yeah, the first thing is {all[0]}.</div>);
                
            }
            else if(all.length === 2) {
                return(
                <div>Yeah, there is another thing is {all[1]} out of the first thing {all[0]}.</div>);
            }
            else {
                return(<div>This is just a test for optional catch-in routes.</div>);
                
            }
    
   
    
}