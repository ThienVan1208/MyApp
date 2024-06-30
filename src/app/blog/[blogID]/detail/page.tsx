"use client"
import { useParams } from "next/navigation"
export default function Detail(){
    const para = useParams();
    const id = para.blogID;
    return(
        <div>
            <h1>Blog {id}</h1>
            <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
            </ul>
        </div>
    );
}