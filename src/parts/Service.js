/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Our Service</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Ready to scale your IT solution with our expert team, delivering powerful results.
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {
            data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fade direction={item.animation} delay={500 * index} key={index} triggerOnce>
                <div
                  className="bg-white group rounded-2xl border border-green transform transition duration-500 hover:scale-110 w-full"
                  
                >
                  <div
                    className="relative overflow-hidden rounded-t-2xl transition duration-500"
                    style={{ boxShadow: '0 6px 25px rgba(0, 0, 0, 0.3)' }} // Black shadow initially
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 6px 25px rgba(44, 140, 132, 0.8)'; // Green shadow on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.3)'; // Revert to black shadow
                    }}
                  >
                    <img src={item.imageUrl} alt="Service" className="w-full h-72 object-cover" />
                  </div>
                  <div className="text-center py-6 w-full rounded-b-2xl flex justify-center items-center h-24">
                    <h2 className="text-theme-blue text-xl">{item.title}</h2>
                  </div>
                </div>
              </Fade>
            ))
          }
        </div>

      </div>
    </div>
  );
}
