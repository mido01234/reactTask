// import React, { useState } from 'react';

// function ProfileCard() {
//   const [isFollowed, setIsFollowed] = useState(false);

//   const handleFollowClick = () => {
//     setIsFollowed(true);
//   };

//   return (
//     <div className="profile-card">
//       <img src="profile.jpg" alt="Profile" />
//       <div>
//         <h2>Digital Marketing</h2>
//         <p>Head of Digital Marketing</p>
//         <button onClick={handleFollowClick}>
//           {isFollowed ? 'Save Contact' : 'Follow'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;
// import React from 'react';
// import { Button } from 'react-bootstrap';

// const ProfileCard = () => {
//   return (
//     <div className="profile-card text-center">
//       <img src="profile-image-url" alt="Profile" className="img-fluid rounded-circle" />
//       <h2>Digital Marketing</h2>
//       <p>Head of Digital Marketing</p>
//       <Button variant="success">Follow</Button>
//     </div>
//   );
// };

// export default ProfileCard;
// import React, { useState } from 'react';

// import { Button } from 'react-bootstrap';
// import prof from './../assets/Rectangle 2504.png'
// import icon from './../assets/Frame 44305.png'
// const ProfileCard = () => {
//     const [isFollowed, setIsFollowed] = useState(false);

//     const handleFollowClick = () => {
//       setIsFollowed(!isFollowed);
//       <>
//       <p style={{color:'black'}}>asasdkjasldj</p>
//       </>
//     };
//   return (

//     <div className="profile-card  ">
//       <img src={prof} alt="Profile"  />
      
//       <div className='content'>
//       <h2><img src={icon}/>Digital Marketing</h2>
//       <p>Head of Digital Marketing</p>
//       <button onClick={handleFollowClick} className="follow-button">
//           {isFollowed ? 'Save Contact' : 'Follow'}
//         </button>
//       </div>
      
//     </div>
//   );
// };

// export default ProfileCard;

// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import prof from './../assets/Rectangle 2504.png';
// import icon from './../assets/Frame 44305.png';
// import iss from './../assets/Frame 44292.png'

// const ProfileCard = () => {
//     const [isFollowed, setIsFollowed] = useState(false);
//     const [showImage, setShowImage] = useState(false); // حالة جديدة لتتبع عرض النص أو الصورة

//     const handleFollowClick = () => {
//       setIsFollowed(!isFollowed);
//       setShowImage(!showImage); // تبديل القيمة عند النقر على الزر
//     };

//     return (
//         <div className="profile-card">
//             <img src={prof} alt="Profile" />
//             <div className='content'>
//                 <h2>
//                     <img src={icon} alt="Icon" />
//                     {showImage ? <img style={{width:'200px', margin:"auto"}} src={iss} alt="New Image" /> : 'Digital Marketing'} {/* عرض النص أو الصورة بناءً على حالة showImage */}
//                 </h2>
//                 <p>Head of Digital Marketing</p>
//                 <button onClick={handleFollowClick} className="follow-button">
//                     {isFollowed ? 'Save Contact' : 'Follow'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProfileCard;
// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import prof from './../assets/Rectangle 2504.png';
// import icon from './../assets/Frame 44305.png';
// import iss from './../assets/Frame 44292.png';
// import fol from './../assets/fol.png';

// const ProfileCard = () => {
//     const [isFollowed, setIsFollowed] = useState(false);
//     const [showImage, setShowImage] = useState(false);
//     const [showFollowers, setShowFollowers] = useState(false);

//     const handleFollowClick = () => {
//         setIsFollowed(!isFollowed);
//         setShowImage(!showImage);
//         setShowFollowers(!showFollowers);
//     };

//     return (
//         <div className="profile-card">
//             <img src={prof} alt="Profile" />
//             <div className='content'>
//                 <h2>
//                     {showImage ? (
//                         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                             <img style={{ width: '200px', marginBottom: '45px' ,position:'absolute',left:'-20%'}} src={fol} alt="Follow Image" />
//                             <img style={{ width: '300px', position:'absolute',left:'-20%',marginBottom:'1px' }} src={iss} alt="New Image" />
//                         </div>
//                     ) : (
//                         <>
//                             <img src={icon} alt="Icon" />
//                             Digital Marketing
//                         </>
//                     )}
//                 </h2>
//                 <p >{showFollowers ? <p className='p-content'>More than 5000 followers</p> : 'Head of Digital Marketing'}</p>
//                 <button onClick={handleFollowClick} className="follow-button">
//                     {isFollowed ? 'Save Contact' : 'Follow'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProfileCard;


// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import prof from './../assets/Rectangle 2504.png';
// import icon from './../assets/Frame 44305.png';
// import iss from './../assets/Frame 44292.png';
// import fol from './../assets/fol.png';

// const ProfileCard = () => {
//     const [isFollowed, setIsFollowed] = useState(false);
//     const [showImage, setShowImage] = useState(false);
//     const [showFollowers, setShowFollowers] = useState(false);
//     const [bgColor, setBgColor] = useState('');
//     const [profile, setProfile] = useState(''); 
//     const [colorrr, setcolorrr] = useState('');
//     const handleFollowClick = () => {
//         setIsFollowed(!isFollowed);
//         setShowImage(!showImage);
//         setShowFollowers(!showFollowers);
//         setBgColor(!isFollowed ?   '#E8EBE7' : ''); 
//         setProfile(!isFollowed ?  '30px' :'')
//         setcolorrr(!isFollowed ?  'white' :'')
     
//     };

//     return (
//         <div className="profile-card"style={{ backgroundColor: bgColor }}>
//             <img src={prof} alt="Profile" style={{ marginLeft:'5%',padding: '30px',background:colorrr}} />
//             <div className='content'  > 
//                 <h2>
//                     {showImage ? (
//                         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
//                             <img style={{ width: '200px',height:'45px', marginBottom: '45px', position: 'absolute', left: '-30%' }} src={fol} alt="Follow Image" />
//                             <img style={{ width: '300px', position: 'absolute', left: '-20%', marginBottom: '1px' }} src={iss} alt="New Image" />
//                         </div>
//                     ) : (
//                         <>
//                             <img src={icon} alt="Icon" />
//                             Digital Marketing
//                         </>
//                     )}
//                 </h2>
//                 <p>{showFollowers ? <p className='p-content'>More than 5000 followers</p>: 'Head of Digital Marketing'}</p>
//                 <button onClick={handleFollowClick} className="follow-button">
//                     {isFollowed ? 'Save Contact' : 'Follow'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProfileCard;
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import prof from './../assets/Rectangle 2504.png';
import icon from './../assets/Frame 44305.png';
import iss from './../assets/Frame 44292.png';
import fol from './../assets/fol.png';
import iconss from './../assets/Vector.png'


const ProfileCard = ({ isFollowed, setIsFollowed }) => {

    // const [isFollowed, setIsFollowed] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showFollowers, setShowFollowers] = useState(false);
    const [bgColor, setBgColor] = useState('');
    const [profile, setProfile] = useState(''); 
    const [colorrr, setcolorrr] = useState('');
    const handleFollowClick = () => {
       
        setIsFollowed(!isFollowed );
        setShowImage(!showImage);
        setShowFollowers(!showFollowers);
        setBgColor(!isFollowed ?   ' rgba(0 0, 0,0)' : ''); 
        setProfile(!isFollowed ?  '30px' :'')
        setcolorrr(!isFollowed ?  'white' :'')
        
       
    };
    
    return (
        
          <div className="profile-card"style={{ backgroundColor: bgColor }}>
            <img src={prof} alt="Profile" style={{ marginLeft:'5%',padding: '30px',background:colorrr}} />
                <div className='content'  > 
                    <h2>
                        {showImage ? (
                            <div className='div1'>
                                <img className='img1' src={fol} alt="Follow Image" />
                                <img className='img2'  src={iss} alt="New Image" />
                            </div>
                        ) : (
                            <>
                                <img src={icon} alt="Icon" />
                                Digital Marketing
                            </>
                        )}
                    </h2>
                    <p>{showFollowers ? <p className='p-content'>More than 5000 followers</p>: 'Head of Digital Marketing'}</p>
                    <button style={{position:'relative'}} onClick={handleFollowClick} className="followButton" data-status={isFollowed ? "save" : "follow"}>
                     {isFollowed ? <><img src={iconss} alt="Save Icon" style={{bottom:'-10%',left:'-1%',position:'absolute',height:'20px',width: '15px',}} />Save Contact</> : 'Follow'}
                        
                    </button>
                </div>
            </div>
       
    );
};

export default ProfileCard;