// function Tabs() {
//     return (
//       <div className="tabs">
//         <button>About</button>
//         <button>Achievements</button>
//         <button>Social Media</button>
//       </div>
//     );
//   }
// export default Tabs  
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const TabsSection = () => {
    return (
        <div className='footer'>
            <div className='buttons'>

                <button>   About  </button>
                <button> Achievements   </button>
                <button> Social Media</button>

            </div>

            <p>I work as the Head of Digital Marketing at my company, developing and implementing strategies to enhance brand awareness and increase sales. I oversee online activities such as social media advertising, email marketing, and SEO, and analyze data for informed decision-making. I enjoy using innovative technologies to achieve the best results and coordinate team efforts to ensure efficient plan execution in the fast-paced digital marketing landscape.</p>
        </div>
    );
};

export default TabsSection;

