"use client"
import { useParams } from "next/navigation"
export default function ReviewID() {
    const pa = useParams();
    const rev_id = pa.revID;
    const id = pa.id;
    return(
        <div>
            <div>This is review {rev_id} for product {id}.</div>
        </div>
    );
}