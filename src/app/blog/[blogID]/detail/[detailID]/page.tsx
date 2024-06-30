"use client"
import { useParams } from "next/navigation"
export default function DetailID() {
    const para = useParams();
    const id = para.blogID;
    const det_id = para.detailID;
    return(
        <div>This is the detail {det_id} for blog {id}.</div>
    );
}