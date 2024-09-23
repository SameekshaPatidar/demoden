import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Card = ({ image, author, date, title, description }) => {
    return (
        <div className='max-w-sm rounded-2xl overflow-hidden  transform transition-transform hover:scale-105'>
            <img className='w-full h-50 object-cover rounded-t-lg' src={image} alt={title} />
            <div className="p-4">
                <div className="flex items-center text-gray-600 text-sm mb-2">
                    <span className="mr-2">By {author}</span>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <span>{date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default Card;




// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


// const Card = ({ image, author, date, title, description }) => {
//     return (
      
//         <div className='max-w-sm rounded-lg overflow-hidden  '>
            
            
//             <img className='w-full h-50 object-cover rounded-lg ' src={image} alt={title} />
//             <div className="p-4 ">
//                 <div className="flex items-center text-gray-600 text-sm mb-2">
//                     <span className="mr-2">By {author}</span>
//                     <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
//                     <span>{date}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//                 <p className="text-gray-600 mt-2">{description}</p>
//             </div>
//         </div>
    



      
//     );
// };

// export default Card;

