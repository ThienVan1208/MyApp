"use client";

import { useParams } from 'next/navigation';

export default function BlogID() {
    const params = useParams();
    const id = params.blogID;

    return (
        <div>
            <p>This is BlogID {id} </p>
            <div>Why it does not work.</div>
        </div>
    );
}
