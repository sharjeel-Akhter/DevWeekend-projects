import { useState } from 'react';
import { createPortal } from 'react-dom';


export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className='text-white' onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <>
        <div className="inset-0 z-50 overflow-hidden m-auto backdrop-blur-3xl h-2/5 w-1/4 rounded-xl  fixed bg-transparent bg-opacity-50 flex items-center justify-center flex-col gap-4">
      <div className="text-amber-50">I'm a modal dialog</div>
      <button className="text-amber-50" onClick={setShowModal(false)}>Close</button>,
        document.body
    </div>
        </>
      )}
    </>
  );
}
