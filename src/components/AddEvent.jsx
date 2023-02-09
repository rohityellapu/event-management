import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Popup from 'reactjs-popup';
const apiURL = "http://localhost:3005/event";
function AddEvent() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setisLoading] = useState(false)

    let [filePath, setFilePath] = useState(null);
    const [file, setFile] = useState(null);
    function handleFile(e) {
        const { files } = e.target;
        setFile(files[0])
        if (files[0]) setFilePath(URL.createObjectURL(e.target.files[0]));
        else setFilePath(null);

    }
    const onSubmit = async data => {
        console.log(data, file);
        data.image = file;
        console.log(data);

        try {
            setisLoading(true)
            const response = await axios.post(apiURL,
                { ...data }, { headers: { "Content-Type": "multipart/form-data" } }).then((items) => console.log(items))
                .catch(e => console.log(e));
            setisLoading(false)


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Popup
                className=''
                trigger={ <button className="button p-2 bg-blue-500 rounded-md">Add Event </button> }
                modal
                nested
            >
                { close => (
                    <div className="modal w-96 flex flex-col gap-4 items-center justify-center bg-black text-white rounded-xl">
                        <button className="close absolute top-1 right-1 text-2xl font-bold text-red-700 bg-red-100 rounded-full py-1 px-2" onClick={ close }>
                            &times;
                        </button>
                        <div className="header text-3xl p-4"> Add an Event </div>
                        <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col gap-2 text-white bg-black p-4 w-full'>
                            <div className="image flex justify-center items-center flex-col">


                                { filePath ? <img src={ filePath } alt='user-img' style={ { maxHeight: '250px' } } /> :
                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg ariaHidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input onInput={ handleFile } { ...register('file', { required: 'Please Upload an Image.' }) } id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>
                                }

                                <p className='text-red-400 text-xs pl-1'>{ errors.file?.message }</p>
                            </div>
                            <div className="name">

                                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Event Name' { ...register('name', { required: "Enter event name." }) } id="" />
                                <p className='text-red-400 text-xs pl-1'>{ errors.name?.message }</p>
                            </div>
                            <div className="location">

                                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Full Address' { ...register('address', { required: "Enter full event address." }) } id="" />
                                <p className='text-red-400 text-xs pl-1'>{ errors.address?.message }</p>
                            </div>
                            <div className="description">

                                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Tell us something about it.' { ...register('info', { required: "Please describe it." }) } id="" />
                                <p className='text-red-400 text-xs pl-1'>{ errors.info?.message }</p>
                            </div>
                            <div className="startTime">
                                <label htmlFor="start">Starts on</label>
                                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="datetime-local" placeholder='Event time' { ...register('startTime', { required: "Enter When it's starts." }) } id="" />
                                <p className='text-red-400 text-xs pl-1'>{ errors.startTime?.message }</p>
                            </div>
                            <div className="startTime">
                                <label htmlFor="start">Ends on</label>
                                <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="datetime-local" placeholder='Event time' { ...register('endTime', { required: "Enter When it's ends." }) } id="" />
                                <p className='text-red-400 text-xs pl-1'>{ errors.endTime?.message }</p>
                            </div>
                            <div className="actions flex justify-around">
                                <input disabled={ isLoading } type="submit" value="Post" className='p-2 rounded-md bg-blue-600 disabled:opacity-50 hover:cursor-pointer hover:saturate-200' />
                                <button
                                    className="button bg-red-500 rounded-md p-2"
                                    onClick={ () => {
                                        close();
                                    } }
                                >
                                    Close
                                </button>
                            </div>

                            { isLoading && <div className='w-full flex items-center justify-center p-5'>
                                <img className='h-12 w-12' src={ require('../images/loading.gif') } alt="" />
                            </div> }
                        </form>

                    </div>
                ) }
            </Popup>
        </div>
    )
}

export default AddEvent