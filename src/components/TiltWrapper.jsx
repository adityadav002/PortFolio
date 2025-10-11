// TiltWrapper.js
import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltWrapper = ({ children, options, className }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options || {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 10,
      });
    }
    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default TiltWrapper;
