
import { totalCredit } from "../App";


const Cart = ({cart}) => {
    const credit = cart.reduce((p,c)=>p +c.credit, 0);
    return (
        <div className=' md:w-[23%] lg:w-[23%]'>
<div className='min-h-screen bg-white p-4  rounded-xl'>
            <div>
                <h3 className='font-bold text-blue-500'>Credit hour remaining {totalCredit - credit} hr</h3>
            </div>
            <div className="divider"></div>
            <div className='text-left '>
                <h5 className='font-bold'>Class Name
                <div>
                <ul className='list-decimal p-4'>
                   {
                    cart.map(c => <li className='text-[14px]'>{c.name}</li>)
                   }
                   </ul>
                </div>
                
                </h5>
              
            </div>
            <div className="divider"></div>
            <div>
                <h5>Total Credit Hour: {credit}</h5>
            </div>
            <div className="divider"></div>
            <div>
                <h5 className='font-bold'>Total Price: {cart.reduce((p,c)=>p +c.price, 0)} USD</h5>
            </div>
            
        </div>
        </div>
        
    );
};

export default Cart;