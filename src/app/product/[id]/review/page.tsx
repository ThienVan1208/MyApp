"use client"
import { useParams } from "next/navigation";

export default  function Review() {
    const par = useParams();
    const id = par.id;
    return(
        <div>
            <h1>Product {id}</h1>
            <ol>
                <li>Review 1</li>
                <li>Review 2</li>
                <li>Review 3</li>
            </ol>
        </div>
    );
}