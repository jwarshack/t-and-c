import './App.css';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useCookies } from 'react-cookie';



function App() {

  const [showModal, setShowModal] = useState(false);

  const [cookies, setCookie] = useCookies(['t&c']);


  const onClose = () => {
    setShowModal(false);
  }

  const handleCookies = () => {
    setCookie('Agreed', true);
    window.location.reload();

  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <Modal 
        open={showModal && !cookies.Agreed}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='flex justify-center items-center'
      >
        <div className='bg-white w-1/4 h-1/2 rounded flex flex-col items-center' >
          Agree to terms and conditions
          <button className='bg-red-300 py-2 px-4 rounded text-white' onClick={handleCookies}>I Agree</button>
          
        </div>

      </Modal>
      <button className='bg-gray-200 py-2 px-3 rounded' onClick={() => setShowModal(true)}>Launch App</button>

    </div>
  )
}

export default App;
