"use client";

import { useParams } from 'next/navigation';

export default function ProductDetail() {
    const par = useParams();
    const id = par.id;

    return (
        <div>
            <p>Product ID: {id}</p>
            <div>This is the details of product {id}</div>
        </div>
    );
}
