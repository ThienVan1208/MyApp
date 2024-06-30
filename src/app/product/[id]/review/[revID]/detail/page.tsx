"use client"
import { useParams } from "next/navigation"
export default function Detail() {
    const param = useParams();
    const pro_id = param.id;
    const rev_id = param.revID;
    return(
        <div>
            <h1>
                Review {rev_id} of Product {pro_id}:
            </h1>
            <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
            </ul>
        </div>
    );
}