import React from 'react';
import Course from './Course';

const Courses = ({courses, handleSelect}) => {
    return (
       
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-[75%] lg:w-[75%]'>

            {
                courses.map(course =>  <Course handleSelect={handleSelect} course={course}></Course>)
            }
           
           
        </div>
        
        
    );
};

export default Courses;