import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
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
                <div className='bg-xhite items-center justify-between flex my-3 px-2 mx-1  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <p>Exigences</p>
                    <p>Tolerance</p>
                </div>
                <div className='bg-xhite items-center justify-between flex mx-1  my-3 px-2  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <p>Exigences</p>
                    <p>Tolerance</p>
                </div>
                <div className='bg-xhite items-center justify-between flex mx-1 my-3 px-2  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <p>Exigences</p>
                    <p>Tolerance</p>
                </div>
                <div className='bg-xhite items-center justify-between flex mx-1 my-3 px-2  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <p>Exigences</p>
                    <p>Tolerance</p>
                </div>
                <div className='bg-xhite items-center justify-between flex mx-1 my-3 px-2  font-bold text-sm text-[#727c8e] '>
                    <p>Exigences</p>
                    <p>Tolerance</p>
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
