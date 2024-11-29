import React, { useState } from 'react';
import { Accessibility, Add, CalendarMonth, DeleteForeverOutlined, DirectionsRun, Timer, TouchAppSharp } from '@mui/icons-material';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import mockData9 from "../../assets/constants/data9.json";
import mockData from "../../assets/constants/data8.json";
import Dots from '../../components/Dots';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import user from "../../assets/user.jpg"


const getphoneImage = (appareil) => {
    switch (appareil) {

        default:
            return user;
    }
};


const UserSecu = () => {


    const columnHelper = createColumnHelper();



    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const columns = [


        columnHelper.accessor("appareil", {
            cell: (info) => {
                const appareil = info.getValue();
                const mac = info.row.original.mac;
                return (
                    <div className="flex items-center">
                        {getphoneImage(appareil) && (
                            <img
                                src={getphoneImage(info.getValue())}
                                alt={`${info.getValue()} profile`}
                                className="m-2 w-8 h-8 rounded-full"
                            />

                        )}
                        <span className=''>
                            {appareil}
                            {mac && <><br />{mac}</>}
                        </span>

                    </div>
                );
            },
            header: (info) => (
                <span className="flex items-center">
                    APPAREILS autorisés
                </span>
            ),
        }),


        columnHelper.accessor("ville", {
            cell: (info) => {
                const ville = info.getValue();
                const pays = info.row.original.pays;
                const lieu = info.row.original.lieu;
                return (
                    <span className=''>
                        {ville},{pays}
                        {lieu && <><br />{lieu}</>}
                    </span>
                );
            },
            header: (info) => (
                <span className="flex items-center">
                    EMPLACEMENT
                </span>
            ),
        }),
        columnHelper.accessor("utilisateur", {
            header: (info) => (
                <span className="flex items-center">
                    UTILISATEUR
                </span>
            ),
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("connexion", {
            header: (info) => (
                <span className="flex items-center">
                    Connexion recente
                </span>
            ),
            cell: (info) => {
                const connexion = info.getValue();
                const heure = info.row.original.heure;
                const etat = info.row.original.etat;
                return (
                    <span className=''>
                        {connexion},{heure}
                        {etat && <><br />{etat}</>}
                    </span>
                );
            },
        }),

        columnHelper.accessor("ACTION", {
            header: "Actions",
            cell: (info) => (
                <Dots
                    menuItems={[
                        {
                            label: "Déconnecter", action: () => {

                            }
                        },
                        {
                            label: "Bloquer", action: () => {

                            }
                        },

                        { label: "Supprimer", action: () => { { setShowModalDelete(true) } }, color: "red" },
                    ]}
                />
            ),
        }),
    ];


    const [data] = useState(() => [...mockData]);
   
    const [sorting, setSorting] = useState([]);
 
    const [globalFilter, setGlobalFilter] = useState("");
   
    const [showModalDelete, setShowModalDelete] = useState(false);
    const closeModalDelete = () => setShowModalDelete(false);

    const handleDelete = () => {

        console.log('Item deleted');
        closeModalDelete();
    };



    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
    });

   


    return (
        <div className='pb-2 '>
            <div className=" bg-white  rounded-2xl mb-4 h-auto pt-2 pb-4  mx-2 shadow-lg  flex flex-col">
                <h1 className="font-bold py-2 px-4 border-b-2">Appareils connectés</h1>
                <div className="flex flex-wrap  px-3 pt-3  justify-between">
                    <div className="left flex flex-row ">
                        <div className='text-titre pt-2 px-2 justify-center'>   Trier Par </div>
                        <div className='mr-3 relative'>

                            <select
                                id=""
                                className="h-[40px] w-[200px]  cursor-pointer px-3  text-sm pr-10 mb-2 border border-gray-300 rounded-xl appearance-none"
                                value=""
                                onChange=""
                            >
                                <option value="autorise" className="font-semibold ">
                                    Appareil autorisé
                                </option>
                                <option value="bloque"> Appareil bloqué</option>

                            </select>
                            <div className="absolute top-1  right-3 transform translate-y-1 pointer-events-none text-black">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                    </div>
                    <div className="right  flex flex-row ">
                        <div className='text-titre pt-2 px-2 justify-center'> Nombre d'appareils autorisés</div>
                        <div className='mr-3 relative'>

                            <select
                                id=""
                                className="h-[40px] w-[70px]  cursor-pointer px-3  text-sm pr-10 mb-2 border border-gray-300 rounded-xl appearance-none"
                                value=""
                                onChange=""
                            >
                                <option value="2" className="font-semibold ">
                                    2
                                </option>
                                <option value="3"> 3</option>

                            </select>
                            <div className="absolute top-1  right-3 transform translate-y-1 pointer-events-none text-black">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex-grow  px-2 mb-2">
                    <div className=" bg-white shadow-md rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#EEEEEE]">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th
                                                key={header.id}
                                                className="px-4 py-3 text-left text-[10px]  font-bold text-slate-500 uppercase tracking-wider"
                                            >
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? "cursor-pointer select-none flex items-center"
                                                            : "",
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}

                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {table.getRowModel().rows.slice(0, table.getState().pagination.pageSize).map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50">
                                        {row.getVisibleCells().map((cell) => (
                                            <td
                                                key={cell.id}
                                                className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>

            </div>
            <div className='  h-auto bg-white rounded-2xl mx-2 pt-4 mb-4 flex flex-col shadow-lg '>

                <h1 className="font-bold py-2 pl-3">Exigences Fonctionnelles</h1>
                <p className='text-gray-500  text-sm pl-3'>Définissez le niveau d'exigences liées au processus de pointage de tous les membres.</p>

                <div className='bg-[#EEEEEE] items-center justify-between flex mx-1 my-3 px-2 py-2 font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <p>Exigences</p>
                    <p>Tolerance</p>
                </div>
                <div className='bg-white items-center justify-between flex -my-1 px-2 mx-1  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <div className='flex my-2 text-black flex-row space-x-2 '>
                        <DirectionsRun style={{ width: "20px", height: "20px" }} />
                        <p>Retard accordé pour effectuer le pointage de début</p>

                    </div>
                    <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                        <option value="15">15 Minutes</option>
                        <option value="20">20 Minutes</option>
                        <option value="30">30 Minutes</option>
                    </select>
                </div>

                <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <div className='flex text-black my-2 flex-row space-x-2 '>
                        <div className=''> <DirectionsRun style={{ width: "20px", height: "20px" }} /></div>
                        <p>Retard accordé pour effectuer le pointage de fin</p>

                    </div>
                    <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                        <option value="15">Indéterminé</option>
                        <option value="20">20 Minutes</option>
                        <option value="30">30 Minutes</option>
                    </select>
                </div>

                <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <div className='flex text-black my-2 flex-row space-x-2 '>
                        <div className=''> <Timer style={{ width: "20px", height: "20px" }} /></div>
                        <p>Temps minimum à effectuer pour être qualifié de présent</p>

                    </div>
                    <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                        <option value="25">25%</option>
                        <option value="40">40%</option>
                        <option value="60">60%</option>
                    </select>
                </div>

                <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <div className='flex text-black my-2 flex-row space-x-2 '>
                        <div className=''> <TouchAppSharp style={{ width: "20px", height: "20px" }} /></div>
                        <p>Limite hebdomadaire des pointage manuels par les administrateurs pour chaque membre</p>

                    </div>
                    <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                        <option value="2">2 fois</option>
                        <option value="4">4 fois</option>
                        <option value="6">6 fois</option>
                    </select>
                </div>
                <div className='bg-white items-center justify-between flex mt-2  -my-1 px-2 mx-1  mb-2 font-bold text-sm text-[#727c8e]  border-[#D9D9D9]'>
                    <div className='flex text-black my-2 flex-row space-x-2 '>
                        <div className=''> <Accessibility style={{ width: "20px", height: "20px" }} /></div>
                        <p>Inspection automatique de présence (une par activité planifiée)</p>

                    </div>
                    <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                        <option value="active">Activé</option>
                        <option value="desactive">Désactivé</option>
                    </select>
                </div>

            </div>




            <div className=" bg-white  rounded-2xl mx-2 mb-4 h-auto pt-2 pb-2 shadow-lg  flex flex-col">

                <h1 className="font-bold py-2 pl-3">Mode de pointage</h1>
                <p className='text-gray-500  text-sm pl-3'>Renseigner le(s) mode(s) d'authentification que cet utilisateur doit utiliser pour pointer sa présence</p>


                <div className="flex-grow  px-2 mb-2">
                    <div className=" bg-white shadow-md rounded-2xl">

                        <div className='bg-[#EEEEEE] items-center justtext-startify-center  flex mx-1 my-3 px-2 py-2 font-bold text-[14px] text-titre border-b-2 border-[#D9D9D9]'>
                            <p className='w-2/6'>TYPE DE POINTAGE</p>
                            <p className='w-1/6 text-start'>SECURITE</p>
                            <p className='w-1/6 text-start' >FIABILITE</p>
                            <p className='w-1/6 text-start' >EFFICACITE</p>
                            <p className='w-1/6 text-start' >STATUS</p>
                        </div>
                        <div className='bg-white items-center justify-between flex -my-1 px-2 mx-1  font-bold text-[14px] text-[#a5adbc] border-b-2 border-[#D9D9D9]'>
                            <div className='flex my-2 w-2/6 text-titre flex-row space-x-2 '>
                                <input
                                    type='checkbox'
                                    className='text-center -mt-1  h-5 text-lightblue  items-center justify-center accent-lightblue '
                                />
                                <p className='-mt-1'>Code QR</p>

                            </div>
                            <div className='text-start w-1/6'>
                                <p className='text-titre'>Très elevé</p>

                            </div>

                            <div className='text-start w-1/6 '>
                                <p className='text-titre'>Très elevé</p>
                            </div>
                            <div className='text-start w-1/6'>
                                <p className='text-titre'>90%</p>
                            </div>
                            <div className='text-start w-1/6'>

                                <p className='text-titre'>Autoriser</p>
                            </div>
                        </div>

                        <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[14px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                            <div className='flex my-2 w-1/3 text-titre flex-row space-x-2 '>
                                <input
                                    type='checkbox'
                                    className='text-center -mt-1 h-5 text-[14px] text-lightblue  items-center justify-center accent-lightblue '
                                />
                                <p className='-mt-1'>Signature numérique</p>

                            </div>
                            <div className='text-start w-1/6'>
                                <p className='text-titre'>Moyen</p>

                            </div>

                            <div className='text-start w-1/6 '>
                                <p className='text-titre'>Moyen</p>
                            </div>
                            <div className='text-start w-1/6'>
                                <p className='text-titre'>75%</p>
                            </div>
                            <div className='text-start w-1/6'>

                                <p className='text-titre'>Autoriser</p>
                            </div>
                        </div>

                        <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[14px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                            <div className='flex my-2 w-1/3 text-titre flex-row space-x-2 '>
                                <input
                                    type='checkbox'
                                    className='text-center -mt-1 text-[14px] text-lightblue h-5 items-center justify-center accent-lightblue '
                                />
                                <p className='-mt-1'>Analyse faciale</p>

                            </div>
                            <div className='text-start w-1/6'>
                                <p className='text-titre'>Indisponible</p>

                            </div>

                            <div className='text-start w-1/6 '>
                                <p className='text-titre'>Indisponible</p>
                            </div>
                            <div className='text-start w-1/6'>
                                <p className='text-titre'>Indisponible</p>
                            </div>
                            <div className='text-start w-1/6'>

                                <p className='text-titre'>-</p>
                            </div>
                        </div>



                    </div>


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
        </div>

    )
}

export default UserSecu
