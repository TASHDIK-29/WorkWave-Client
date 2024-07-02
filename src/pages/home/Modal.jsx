import { useState } from "react";
// import './modal.css';

const Modal = ({ handleSelection, call }) => {

    // const [selection, setSelection] = useState('');
    // console.log(selection);
    console.log(call);

    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-80 text-center">
                <h2 className="text-xl mb-4">Welcome To WorkWave</h2>
                <p className="mb-4">Please select an option:</p>
                <select
                    // value={selection}
                    onChange={handleSelection}
                    className="block w-full p-2 mb-4 border border-gray-300 rounded"
                >
                    {/* <option value="" disabled>Select an option</option> */}
                    <option value="Healthcare">Healthcare</option>
                    <option value="Social Service">Social Service</option>
                    <option value="Education">Education</option>
                    <option value="Animal Welfare">Animal Welfare</option>
                </select>
                
            </div>
        </div>
    );
};

export default Modal;