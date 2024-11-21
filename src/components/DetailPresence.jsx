import React from 'react';
import { Modal } from "flowbite-react";
import { useState } from "react";

const DetailPresence = () => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>

            <Modal
                show={openModal}
                onClose={() => setOpenModal(false)}
                className="relative w-[500px] md:max-w-2xl mx-auto pb-12 my-2 bg-transparent "
                style={{
                    boxShadow: '0 50px 50px 50px rgba(0, 0, 0, 0.75)',
                }}
            >
                <Modal.Header className='text-'>Détails de présence</Modal.Header>

                <Modal.Body>
                    <div className='flex-row  text-[12px]'>

                        <div className='first px-5 py-3 '>
                            <div className=''>
                                <h1 className='font-bold mb-2'>Général</h1>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Utilisateur </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Date </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Activité </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Lieu </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Plage </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Mode </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Pointage début </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Pointage fin </p>
                                    <p className='capitalize'><span className='mx-1'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Statut </p>
                                    <p className='capitalize'><span className='mx-2'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Temps </p>
                                    <p className='capitalize'><span className='mx-1'> :</span> George Matoudi</p>
                                </div>
                                <div className='justify-between flex mr-5 '>
                                    <p>Heure supplémentaire </p>
                                    <p className='capitalize'><span className='mx-1'> :</span> George Matoudi</p>
                                </div>

                            </div>
                        </div>

                        <div className='second px-5 py-3'>
                            <div className=''>
                                <h1 className='font-bold mb-2'>Inspection</h1>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Etat</p>
                                    <p className='capitalize left-0'><span className='mx-2'> :</span> Validé</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Emission / Réponse </p>
                                    <p className='capitalize'><span className='mx-2'> :</span>E(08:15)/ R(19:20)</p>
                                </div>
                                <div className='justify-between flex mr-5 '>
                                    <p>Absence Potentielle </p>
                                    <p className='capitalize'><span className='mx-2'> :</span>15 minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className='third px-5 py-3'>
                            <div className=''>
                                <h1 className='font-bold mb-2'>Pointeuse</h1>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Id de la pointeuse</p>
                                    <p className='capitalize left-0'><span className='mx-2'> :</span>DC:25:87:86:EF</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Nom de la pointeuse </p>
                                    <p className='capitalize'><span className='mx-2'> :</span>ADM 5</p>
                                </div>
                                <div className='justify-between flex mr-5 mb-1'>
                                    <p>Batterie de la Pointeuse</p>
                                    <p className='capitalize'><span className='mx-2'> :</span>15 %</p>
                                </div>
                                <div className='justify-between flex mr-5 '>
                                    <p>Unité de gestion associée</p>
                                    <p className='capitalize'><span className='mx-2'> :</span>ADM? IPT</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
};

export default DetailPresence;
