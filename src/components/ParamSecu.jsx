import React, { useState } from 'react';
import { Accessibility, Add, DirectionsRun, Timer, TouchAppSharp } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Mail, Phone, Search, User, } from "lucide-react";
import mockData from "../assets/constants/data11.json";
import Dots from './Dots';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import user from "../assets/user.jpg"


const columnHelper = createColumnHelper();



const getphoneImage = (utilisateur) => {
    switch (utilisateur) {

        default:
            return user;
    }
};

const columns = [


    columnHelper.accessor("utilisateur", {
        cell: (info) => {
            const utilisateur = info.getValue();
          
            const role = info.row.original.role;
            return (
                <div className="flex items-center">
                    {getphoneImage(utilisateur) && (
                        <img
                            src={getphoneImage(info.getValue())}
                            alt={`${info.getValue()} profile`}
                            className="m-2 w-8 h-8 rounded-full"
                        />

                    )}
                    <span className=''>
                        {utilisateur}
                        {role && <><br />{role}</>}
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


    columnHelper.accessor("appareil", {
        cell: (info) => {
            const appareil = info.getValue();
            const pays = info.row.original.pays;
            const ville = info.row.original.ville;
            return (
                <span className=''>
                    {appareil}
                    {ville && <><br />{ville} {pays}</>}
                </span>
            );
        },
        header: (info) => (
            <span className="flex items-center">
                APPAREILS
            </span>
        ),
    }),
    columnHelper.accessor("connexion", {
        header: (info) => (
            <span className="flex items-center">
                CONNEXION
            </span>
        ),
        cell: (info) => {
            const connexion = info.getValue();
            const heureD = info.row.original.heureD;
            const heureF = info.row.original.heureF;
            return (
                <span className=''>
                    {connexion}
                    {heureD && <><br />{heureD} à {heureF}</>}
                </span>
            );
        },
    }),
    columnHelper.accessor("statut", {
        header: (info) => (
            <span className="flex items-center">
                STATUT
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    // columnHelper.accessor("connexion", {
    //     header: (info) => (
    //         <span className="flex items-center">
    //             Connexion recente
    //         </span>
    //     ),
    //     cell: (info) => {
    //         const connexion = info.getValue();
    //         const heure = info.row.original.heure;
    //         const etat = info.row.original.etat;
    //         return (
    //             <span className=''>
    //                 {connexion},{heure}
    //                 {etat && <><br />{etat}</>}
    //             </span>
    //         );
    //     },
    // }),

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


const ParamSecu = () => {

    const [data] = useState(() => [...mockData]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [open, setOpen] = useState(true);


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


    const [filter, setFilter] = useState('');

    const handleSetFilter = (event) => {
        setFilter(event.target.value);
    };

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='pb-2 '>
            <div className=' w-full h-auto bg-white rounded-xl  pt-4 flex flex-col shadow-xl '>

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
                        <div className='-rotate-0'> <DirectionsRun style={{ width: "20px", height: "20px" }} /></div>
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



            {/* <div className='p-2 w-full h-auto bg-white rounded-xl mt-3   flex flex-col shadow-xl  '>

                <h1 className="font-bold p-2">Historique de connexion</h1> */}
            <div className=" bg-white w-full rounded-xl h-auto pt-4 pb-2 mt-4 shadow-lg  flex flex-col">
                <h1 className="font-bold py-2 pl-3 border-b-2">Historique de connexion</h1>
                <div className="flex flex-wrap  px-3 pt-3  justify-between">
                    <div className="left">
                        <div className="mb-4 relative">
                            <input
                                value={globalFilter ?? ""}
                                onChange={(e) => setGlobalFilter(e.target.value)}
                                placeholder="Rechercher..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                        </div>
                    </div>
                    <div className="right flex flex-row ">
                        <FilterAltIcon className='mt-2' />
                        <div className='mr-3 relative'>

                            <select
                                id="filter"
                                className="h-[40px] w-[200px]  cursor-pointer px-3  text-sm pr-10 mb-2 border border-gray-300 rounded-xl appearance-none"
                                value={filter}
                                onChange={handleSetFilter}
                            >
                                <option value="" className="font-semibold ">
                                    Périphérique autorisé
                                </option>
                                <option value="Féminin">SAMSUNG</option>
                                <option value="Masculin">IPHONE</option>
                            </select>
                            <div className="absolute top-1  right-3 transform translate-y-1 pointer-events-none text-black">
                                <ExpandMoreIcon />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex-grow  px-2 ">
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
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-700">
                        <div className="flex items-center mb-4 sm:mb-0">
                            <span className="mr-2">Afficher</span>
                            <select
                                className="border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                value={table.getState().pagination.pageSize}
                                onChange={(e) => {
                                    table.setPageSize(Number(e.target.value));
                                }}
                            >
                                {[5, 10, 20, 30].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                                onClick={() => table.setPageIndex(0)}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <ChevronsLeft size={20} />
                            </button>

                            <button
                                className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <span className="flex items-center">
                                <input
                                    min={1}
                                    max={table.getPageCount()}
                                    type="number"
                                    value={table.getState().pagination.pageIndex + 1}
                                    onChange={(e) => {
                                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                        table.setPageIndex(page);
                                    }}
                                    className="w-16 p-2 rounded-md border border-gray-300 text-center"
                                />
                                <span className="ml-1">of {table.getPageCount()}</span>
                            </span>

                            <button
                                className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                <ChevronRight size={20} />
                            </button>

                            <button
                                className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                disabled={!table.getCanNextPage()}
                            >
                                <ChevronsRight size={20} />
                            </button>
                        </div>
                    </div>


                </div>

            </div>

            <div className=" bg-white w-full rounded-xl h-auto pt-4  mt-4 pb-4 flex flex-col shadow-2xl">
                <h1 className="font-bold py-1 pl-3">Vue Publique</h1>
                <div className="flex  pl-3">
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        className="mr-5  w-[22px] h-[22px]"
                    />
                    <label htmlFor="autorise" className="text-[14px] font-regular ml-2"><span className='font-bold'>Autoriser les membres à trouver la structure dans les résultats de Recherche </span><br />
                        Cette option facilite des nouveaux membres au sein de la structure et acroit également la visibilité de la <br />structure. Vous garderez toujours le contrôle sur l'approbation des nouveaux membres
                    </label>
                </div>
            </div>

        </div>







    )
}

export default ParamSecu
