/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      {/* Increased the size of the logo */}
      <img src="/logo192.png" alt="Brand Logo" className="inline-block w-20 h-auto mr-4" /> 
      
      {/* Increased the size of the name and keep responsive behavior */}
      <img src="/name.png" alt="Brand Name" className="hidden md:inline-block w-40 h-auto" />       
    </Button>
  );
}
