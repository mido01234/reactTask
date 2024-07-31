// import icon from './../assets/Save.png'
// function Actions() {
//     return (
//       <div className="actions">
//         <button><img src={icon}/> Save Contact</button>
        
        
//       </div>
//     );
//   }
//   export default Actions
import icon from './../assets/Save.png'


function Actions({isFollowed={isFollowed}}) {
  
    return (
      <div className="actions">
          
          {isFollowed?
          (<button><img src={icon}/>Appointment</button>):
          (<button><img src={icon}/> Save Contact  </button>)
          
          }
       
        
      </div>
    );
  }
  export default Actions