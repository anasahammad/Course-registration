import { IoLogoUsd } from "react-icons/io";
import { IoMdBook } from "react-icons/io";

const Course = ({course, handleSelect}) => {

    const {id, name, description, photo, price, credit} = course;
    return (
        <div>
            <div class=" h-[480px]  bg-base-100 shadow-xl rounded-xl">
  <figure class="px-10 pt-10">
    <img className="w-full" src={photo} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <div className="flex justify-around items-center  gap-4">
        <div className="flex items-center gap-2">
        <IoLogoUsd></IoLogoUsd>
        <p>Price: {price}</p>
        </div>
        <div className="flex items-center gap-2">
        <IoMdBook></IoMdBook>
        <p>Credit: {credit} hr</p>
        </div>
    
    </div>
    <div class="card-actions ">
      <button onClick={()=> handleSelect(course)} class="btn btn-info w-full text-white">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;