// function QRCode() {
//     return (
//       <div className="qr-code">
//         <img src="qr-code.png" alt="QR Code" />
//       </div>
//     );
//   }
// export default QRCode
import React from 'react';
import qr from './../assets/Frame 44277.png'
import bb from './../assets/BisConnectCalendar2.png'

const QRCode = () => {
  return (
    <>
    <div className="qrcode">
      <img src={qr} alt="QR Code" className="img-fluid" />
    </div>
{/*     
     <button className='appon'><img src={bb}/> Appointment </button> */}

   
    </>
  );
};

export default QRCode;

