import React, { useState } from 'react';
import { Add, Key } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Mail, Phone, Search, User, } from "lucide-react";
import mockData from "../assets/constants/data5.json";
import Dots from './Dots';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

const columnHelper = createColumnHelper();

const columns = [

    columnHelper.accessor("utilisateur", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="flex items-center ">
                UTILISATEUR
            </span>
        ),
    }),
    columnHelper.accessor("appareils", {
        cell: (info) => (
            <span className="italic text-blue-600">{info.getValue()}</span>
        ),
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
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
        header: (info) => (
            <span className="flex items-center">
                STATUS
            </span>
        ),
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("ACTION", {
        header: "Actions",
        cell: (info) => (
            <Dots
                menuItems={[

                    { label: "Déconnecter", action: () => alert(`Deleting ${info.row.original.name}`) },
                    { label: "Bloquer l'appareil", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                ]}
            />
        ),
    }),
];


const AdminSecu = () => {

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

            <div className=" bg-white w-full rounded-xl h-auto  pb-2  shadow-lg  flex flex-col">
                <h1 className="font-bold py-2 pl-3 border-b-2">Appareils connectés</h1>
                <div className="flex flex-wrap  px-3 pt-3 items-center  justify-between">
                    <div className="left flex flex-row  ">
                        <div className='pt-1'>
                            Trier par
                        </div>
                        <div className='mr-3 relative mx-2'>

                            <select
                                id="filter"
                                className="h-[35px] w-full  cursor-pointer px-2  text-sm pr-10 mb-3 border border-gray-300 rounded-xl appearance-none "
                                value={filter}
                                onChange={handleSetFilter}
                            >
                                <option value="" className="font-semibold ">
                                    Appareils Autorisés
                                </option>
                                <option value=" Appareils autorisés"> Appareils autorisés</option>
                                <option value=" Appareils bloqués"> Appareils bloqués</option>
                            </select>
                            <div className="absolute top-0  right-1 transform translate-y-1 pointer-events-none text-black">
                                <ExpandMoreIcon
                                    style={{ width: "20px", height: "20px" }}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="right flex flex-row  ">
                        <div className='pt-1'>
                            Nombre d'appareils autorisés
                        </div>
                        <div className='mr-3 relative mx-2'>

                            <select
                                id="filter"
                                className="h-[35px] w-[70px]  cursor-pointer px-5  text-sm pr-10 mb-3 border border-gray-300 rounded-xl appearance-none "
                                value={filter}
                                onChange={handleSetFilter}
                            >
                                <option value="" className="font-semibold ">
                                    1
                                </option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <div className="absolute top-0  right-1/4 transform translate-y-1 pointer-events-none text-black">
                                <ExpandMoreIcon
                                    style={{ width: "20px", height: "20px" }}
                                />
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
                <div className='flex flex-row justify-between mx-3'>
                    <h1 className="font-bold  ">Mot de passe</h1>
                    <p className='text-blue2 text-[12px] cursor-pointer'>Mot de passe oublié ?</p>
                </div>
                <div className="flex mx-3 flex-col mt-3">
                    <p className='text-gray-500 '>Souhaitez-vous modifier le mot de passe ?</p>

                    <div className='w-full flex flex-wrap justify-between mt-3'>
                        <input
                            type="password"
                            id="jour"
                            placeholder="Entrez le mot de passe actuel"
                            className=" w-[32%] border border-gray-300 rounded-xl text-black text-[14px] px-3 py-2"
                            
                        />
                        <input
                            type="password"
                            id="jour"
                            placeholder="Définir le nouveau mot de passe"
                            className=" w-[32%] border border-gray-300 rounded-xl text-black text-[14px] px-3 py-2"
                            
                        />
                        <input
                            type="password"
                            id="jour"
                            placeholder="Confirmer le nouveau mot de passe"
                            className=" w-[32%] border border-gray-300 rounded-xl text-black text-[14px] px-3 py-2"
                            
                        />
                    </div>

                    <p className='mt-3 text-[12px] font-bold'><span className='text-red '>Exigences de mot de passe :</span> <span>Minimum 8 caractères, au moins un caractère majuscule, au moins un chiffre, un symbole ou un espace</span></p>
                </div>
            </div>

            <div className=" bg-white w-full rounded-xl h-auto pt-4  mt-4 pb-4 flex flex-col shadow-2xl">
                <div className='flex flex-row justify-between mx-3 '>
                    <h1 className="font-bold  ">Authentification à double facteurs</h1>
                    <button className='bg-lightblue mx-3 py-1 px-3 text-[12px] text-white rounded  '> <span> 
                        <Key
                        style={{width:"14px",  height:"14px" , marginRight:"5px"}}
                    /> </span> ACTIVER</button>

                </div>
                <div className="flex mx-3 flex-col mt-3">
                <p className='text-gray-500 text-[12px] '>L'authentification à double facteurs n'est pas encore activé</p>
                  

                    <p className='mt-3 text-[12px] mr-4'>L'authentification à double facteurs ajoute une couche de sécurité supplémentaire à votre compte en exigeant plus qu'un simple mot de passe pour vous connecter <span className='text-lightblue'>En savoir plus</span></p>
                </div>
            </div>

        </div>







    )
}

export default AdminSecu
