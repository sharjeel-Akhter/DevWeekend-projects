import {useDispatch, useSelector} from 'react-redux'
import {ADD_ONE, Subs_ONE, Reset_All} from '../features/counter'
import LoadingBtn from './LoadingBtn';
import PortalExample from './PortalExample.jsx'
import { ImSpinner3 } from "react-icons/im";


function Counter() {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

    return (
        <div className="mt-8 bg-gray-800 h-screen">
            <div className="flex flex-col items-center justify-center h-screen">
                <p className='text-2xl text-white mb-10'>{count}</p>
                <button onClick={()=>dispatch(ADD_ONE())} className="py-4 px-3 rounded bg-blue-400 text-xl mb-3">Increment</button>
                <button onClick={()=>dispatch(Subs_ONE())} className="py-4 px-3 rounded bg-blue-400 text-xl mb-3">Decrement</button>
                <button onClick={()=>dispatch(Reset_All())} className="py-4 px-5 rounded bg-blue-400 text-xl mb-3">Reset</button>
           <ImSpinner3 size={40} className='text-white animate-spin duration-500'/>
            {/* <LoadingBtn/> */}
            {/* <PortalExample/> */}
            </div>
        </div>
    );
}

export default Counter;