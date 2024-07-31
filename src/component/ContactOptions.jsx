// import React from 'react';
// import { FaPhone, FaEnvelope, FaShareAlt, FaCalendar } from 'react-icons/fa';

// const ContactOptions = () => {
//   return (
//     <div className="contact-options d-flex justify-content-around">
//       <FaPhone />
//       <FaEnvelope />
//       <FaShareAlt />
//       <FaCalendar />
//     </div>
//   );
// };

// export default ContactOptions;
import React from 'react';
import { FaPhone, FaEnvelope, FaShareAlt } from 'react-icons/fa';
import mess from './../assets/Capture.png'
const ContactOptions = () => {
  return (
    <div className="contact-options d-flex justify-content-around mb-4">
     <div className='circale'> <FaPhone size={28} /></div>
     <div className='circale1'> < img src={mess} /></div>
     <div className='circale'>   <FaEnvelope size={24} /></div>
     <div className='circale'> <FaShareAlt size={24} /></div>
    </div>
  );
};

export default ContactOptions;
