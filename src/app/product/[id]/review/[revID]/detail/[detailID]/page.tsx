"use client"
import { useParams } from "next/navigation"
export default function DetailID() {
    const param = useParams();
    const pro_id = param.id;
    const rev_id = param.revID;
    const det_id = param.detailID;
    return(
        <div>
            <div>This is the detail {det_id} for Review {rev_id} of Product {pro_id}</div>
        </div>
    );
}