"use client"
import { useParams } from "next/navigation"
export default function Docs() {
    const param = useParams();
    const all = param.docs;
    if(all.length === 3) {
        return(
            <div>
                <h1>Document {all[0]} about {all[1]} for {all[2]}</h1>
            </div>
        );
    }
    else if (all.length === 2) {
        return(
            <div>
                <h1>Document {all[0]} about {all[1]}</h1>
            </div>
        );
    }
    else {
        return(
            <div>
                This is a document home page.
            </div>
        );
    }
}