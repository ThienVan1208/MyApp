'use client'; // Thêm dòng này để chỉ định rằng đây là Client Component

import React from 'react';
import Head from 'next/head';
import './Home.css';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="fb.png" />
      </Head>

      <div className="shapes-container">
        {/* Khối vuông */}
        <div className="square1">
          <b>Welcome to my website</b>, this is my first project.
        </div>
      </div>
      <div className="shapes-container">
        <div className="square2">
          {/* Nội dung của square2 */}
        </div>
      </div>
      
      <form action="https://httpbin.org/get" method="get">
        <label htmlFor="Name">Name:</label>
        <input type="text" style={{ color: 'blue' }} name="Name"/>

          <button type="submit" className="custom-button" >
            Submit
          </button>
          <button type="button" className="custom-button" onClick={() => alert('Button clicked!')}>
            Click me!
          </button>
      
        
      </form>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100011270359520">Click here</a>
      </div>
    </div>
  );
}
