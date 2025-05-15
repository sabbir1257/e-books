import React, { useEffect, useState } from 'react';

const Slider = ({jsonUrl}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error('Error loading images:', err));
  }, [jsonUrl]);

  return (
    <div className="w-full mx-auto mt-10">
      <div className="overflow-x-auto whitespace-nowrap p-4 rounded-lg shadow scroll-smooth">
        <div className="inline-flex gap-4">
          {images.map((item) => (
            <div
              key={item.id}
              className="w-[230px] h-[350px] rounded-3xl overflow-hidden flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={`Card ${item.id}`}
                className="w-full h-full object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
