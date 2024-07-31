
import React from 'react';
import us from './../assets/User.png'
const Stats = () => {
  return (
    <div className="stats d-flex justify-content-around mb-4">
      <div style={{position:'relative'}} className='stat'>Individual:<img style={{position:'absolute' , top:'50%',right:'45%'}} src={us}/> </div>
      <div className='stat'>Total Followers: <p>5000</p></div>
      <div className='stat'>Views: <p style={{fontWeight:'bold'}}>4.2k</p></div>
    </div>
  );
};

export default Stats;
