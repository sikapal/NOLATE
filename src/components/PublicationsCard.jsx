import React, { useState, useRef } from 'react'
import Dots from './Dots'
import image from '../assets/image.jpg'
import ImageIcon from '@mui/icons-material/Image';
import { Add, DeleteForeverOutlined } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import HearingOutlinedIcon from '@mui/icons-material/HearingOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import SlidePublication from '../pages/activites/SlidePublication';


const PublicationsCard = ({ publication }) => {
    const [showModalNewPublication, setShowModalNewPublication] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const closeModalDelete = () => setShowModalDelete(false);

    const handleDelete = () => {
        console.log('Item deleted');
        closeModalDelete();
    };

    //audio parameters  
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorderRef = useRef(null);

    const handleStartRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                const audioBlob = new Blob([event.data], { type: "audio/webm" });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Microphone access denied:", error);
            alert("Unable to access the microphone. Please grant permissions.");
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };


    return (
        <div className="border border-gray-300 w-[375px] h-[250px] rounded-lg shadow-lg p-3 my-3 bg-white">

            <div className="flex h-[80%]">
                <div className="border border-gray-300 rounded-2xl w-[35%]">
                    <img src={image} alt="file" className="h-[80%]" />
                    <div className="h-[20%] flex justify-center items-center py-1">
                        <p className="flex items-center text-[10px] cursor-pointer">
                            <ImageIcon style={{ width: "15px", height: "15px" }} /> 5 photos
                        </p>
                    </div>
                </div>
                <div className="mx-3 w-[60%] flex flex-col justify-between">
                    <div className="flex relative justify-between">
                        <h2 className="text-sm font-bold">Direction des Ressources Humaines</h2>
                        <div className="absolute -right-5 -top-1">
                            <Dots menuItems={[
                                { label: "Modifier", action: () => setShowModalNewPublication(true) },
                                { label: 'Signaler', action: () => console.log('Desactiver clicked'), color: 'black' },
                                { label: "Supprimer", action: () => setShowModalDelete(true), color: "red" },
                            ]} />
                        </div>
                    </div>
                    <div className="flex items-center -mt-3">
                        <img src={image} alt="profile" className="rounded-full w-[20px] h-[20px]" />
                        <h2 className="text-[#707070] font-bold pl-2 items-center justify-center text-[12px]">Auteur</h2>
                        <p className="text-[10px] pl-2 items-center justify-center">à l'instant</p>
                    </div>
                    <div className='-mt-4'>
                        <p className="text-black text-[11px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                            Lorem ipsum dolor sit amet,
                        </p>
                    </div>
                    <div className="flex items-center justify-end">
                        {audioURL ? (
                            <div className="w-64 h-7 border rounded-lg bg-white flex items-center justify-center">
                                <audio controls src={audioURL} className="w-full h-7">
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        ) : (
                            <button
                                className={`w-64 h-7 rounded-lg bg-slate-100 text-sm justify-center items-center ${isRecording ? "bg-slate-100" : "bg-slate-100"} text-skyblue`}
                                onClick={isRecording ? handleStopRecording : handleStartRecording}
                            >
                                <Add className="w-2 h-2" /> {isRecording ? "arrêter l'audio" : "ajouter l'audio"}
                            </button>
                        )}
                    </div>

                </div>
            </div>


            <div className='flex pt-6  justify-between items-center'>

                <div className='flex space-x-4'>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center text-violet  bg-gray-200 rounded-full w-6 h-6'>
                            <VisibilityIcon className='text-red-500 ' style={{ width: "15px", height: "15px" }} />

                        </div>

                        <p className='text-[12px] justify-center text-center items-center px-2 py-1'>124</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center text-violet  bg-gray-200 rounded-full w-6 h-6'>
                            <ShareOutlinedIcon className='text-red-500 ' style={{ width: "15px", height: "15px" }} />

                        </div>

                        <p className='text-[12px] justify-center text-center items-center px-2 py-1'>15</p>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center text-violet  bg-gray-200 rounded-full w-6 h-6'>
                            <HearingOutlinedIcon className='text-red-500 ' style={{ width: "15px", height: "15px" }} />

                        </div>

                        <p className='text-[12px] justify-center text-center items-center px-2 py-1'>14</p>
                    </div>
                </div>


                <div className='flex justify-center items-center bg-gray-200 text-red rounded-full w-6 h-6'>
                    < WarningOutlinedIcon className='text-red-500' style={{ width: "15px", height: "15px" }} />
                </div>
            </div>
            {showModalDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white py-4 rounded-lg shadow-lg max-w-sm w-[283px] h-[283] text-center">
                        <h2 className="text-lg font-semibold mb-2">Suppression</h2>
                        <div className='text-red mb-2'> <DeleteForeverOutlined /></div>

                        <p className="text-black mb-6">Êtes-vous de vouloir continuer ?<br />
                            Cette action est irréversible</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => { handleDelete }}
                                className="bg-red-500 text-white px-4 py-2 rounded bg-red"

                            >
                                Supprimer
                            </button>
                            <button
                                onClick={closeModalDelete}
                                className="bg-white text-black px-4 py-2 border-2 rounded hover:bg-gray-400"
                            >
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showModalNewPublication && <SlidePublication setShowModalNewPublication={setShowModalNewPublication} />}

        </div>
    );
};

export default PublicationsCard;

