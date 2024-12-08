import React from 'react';
import Footer from "./Footer";

/* eslint-disable @next/next/no-img-element */


const Content = () => {
  return (
    <div>
      {/* Main Image */}
      <div>
        <img src="/img_1.png" alt="Main Banner" />
      </div>

      {/* Editor's Pick Section */}
      <div className="text-center text-[#252B42] font-bold bg-slate-50 py-6 font-Montserrat">
        <h2 className="text-3xl mt-20 text-[#252B42] font-bold">Editor's Pick</h2>
        <h3 className="text-lg text-gray-500 mt-4">
          Problems trying to resolve the conflict between
        </h3>
      </div>

      {/* Centered Image */}
      <div className="cover flex flex-col items-center bg-slate-50 mb-10 py-20">
        <img
          src="/img_2.png" 
          alt="Editor's Pick Image" 
          
        />
      </div>

      {/* Featured and Best Seller Products */}
      <div className="text-center mt-10 mb-10">
        <h3 className="text-2xl font-semibold text-gray-500">Featured Products</h3>
        <h3 className="text-2xl font-bold text-[#252B42] mt-6">BESTSELLER PRODUCTS</h3>
        <h3 className="text-lg text-gray-500 mt-4">
          Problems trying to resolve the conflict between
        </h3>
      </div>

      {/* Product Rows */}
      <div className="cover flex flex-col py-11 items-center ">
        <img src="/row_1.png" alt="Featured Product Row" className="w-5/6 max-w-4xl rounded-md shadow-sm" />
        <img src="/row.png" alt="Best Seller Product Row" className="w-5/6 max-w-4xl rounded-md shadow-sm" />
      </div>

<div className='cover flex flex-col py-11 items-center space-y-6'>
  <img src='/carousel_2.png' alt='carousel'/>
  <img src='/container_fluid.png' alt="container"/>
</div>

<div>
  <h4 className='text-[#23A6F0] mt-20 font-Montserrat text-center justify-center font-bold'> Pracice advice</h4>
  <h2 className='text-[#252B42] mt-5 text-center font-bold font-Montserrat text-4xl'>Featured Post</h2>
  <p className='text-[#737373] mt-3 text-xl text-bold font-Montserrat text-center'>Problems trying to resolve the conflict between<br />
  the two major realms of Classical physics: Newtonian mechanics </p>
  <div className='cover mt-20 flex flex-col items-center'>
  <img src='/row_2.png'alt="row" />
  </div>
</div>

<Footer />
    </div>
  );
};


export default Content;
