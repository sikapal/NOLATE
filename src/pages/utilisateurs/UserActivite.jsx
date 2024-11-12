import React, { useState } from 'react'
import { AddCircleOutline, ArrowDropDown, FileUpload } from '@mui/icons-material';
import { Divider } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search, } from "lucide-react";
import mockData from "../../assets/constants/data7.json";
import Dots from '../../components/Dots';



const columnHelper = createColumnHelper();

const columns = [

    columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="flex items-center ">
                DATE
            </span>
        ),
    }),
    columnHelper.accessor("activite", {
        cell: (info) => (
            <span className="italic text-blue-600">{info.getValue()}</span>
        ),
        header: (info) => (
            <span className="flex items-center">
                ACTIVITE/ <br />LIEU
            </span>
        ),
    }),
    columnHelper.accessor("heureDebut", {
        header: (info) => (
            <span className="flex items-center">
                HEURE DEBUT
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("heureFin", {
        header: (info) => (
            <span className="flex items-center">
                HEURE FIN
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("duree", {
        header: (info) => (
            <span className="flex items-center">
                DUREE
            </span>
        ),
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("assigne", {
        header: (info) => (
            <span className="flex items-center">
                ASSIGNEE A
            </span>
        ),
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("pointage", {
        header: (info) => (
            <span className="flex items-center">
                MODE DE <br /> POINTAGE
            </span>
        ),
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("info", {
        header: (info) => (
            <span className="flex items-center">
                NOTE <br /> D'INFO
            </span>
        ),
        cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("ACTION", {
        header: "Actions",
        cell: (info) => (
            <Dots
                menuItems={[
                    { label: "Modifier", action: () => alert(`Updating ${info.row.original.name}`) },
                    { label: "Supprimer", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                ]}
            />
        ),
    }),
];


const UserActivite = () => {

    const [presence, setPresence] = useState('');

    const handleSetPresence = (event) => {
        setPresence(event.target.value);
    };

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


    return (
        <>
            <div className='bg-white w-[870px] mx-2  p-4 rounded-2xl  flex flex-col'>

                <div className='flex flex-row justify-between '>

                    <div className='left flex flex-row relative'>
                        <p className='mt-2 w-[50%] font-bold mr-2 text-sm'>Rapport de présence</p>
                        <select
                            id="presence"
                            className="h-[40px] w-[50%] px-2 pr-10 mb-2 border text-sm border-gray-300 rounded-md appearance-none"
                            value={presence}
                            onChange={handleSetPresence}
                        >
                            <option value="" className="font-semibold">
                                Hebdomadaire
                            </option>
                            <option value="Féminin">Journalier</option>
                            <option value="Masculin">Mensuel</option>
                        </select>
                        <div className="absolute top-1 mt-1 right-2 transform -translate-y-1/5 pointer-events-none text-black">
                            <ArrowDropDown />
                        </div>
                    </div>

                    <div className='left flex flex-row relative text-titre'>
                        <select
                            id="presence"
                            className="h-[40px] w-100 bg-gray-200 px-8 pr-10 mb-2 border text-sm border-gray-300 rounded-md appearance-none"
                            value={presence}
                            onChange={handleSetPresence}
                        >
                            <option value="" className="font-semibold">
                                Exporter
                            </option>
                            <option value="Pdf">Pdf</option>
                            <option value="Word">Word</option>
                            <option value="Excel">Excel</option>
                        </select>
                        <div className="absolute top-1 mt-1 left-1  transform -translate-y-1/5 pointer-events-none text-titre">
                            <FileUpload />
                        </div>
                        <div className="absolute top-1 mt-1 right-52 transform -translate-y-1/5 pointer-events-none text-titre">
                            <ArrowDropDown />
                        </div>
                        <button className='w-auto bg-lightblue text-[14px] hover:text-[16px]  ml-3   h-[40px] rounded-xl justify-center text-white  items-center flex'>
                            <div className='flex mr-2 justify-center items-center '>

                                <span> <AddCircleOutline style={{ width: "20px", height: "20px" }} className='justify-center items-center mx-2' /></span>
                                <p>Ajouter une présence</p>
                            </div>
                        </button>
                    </div>


                </div>

                <Divider />

                <div className='w-full h-96 bg-black flex justify-center rounded-lg'>
                    <p className='text-white text-center my-auto justify-center'> Tableau de bord(graphiques) sur les assiduités et la ponctualité</p>
                </div>
            </div>


            <div className='bg-white w-[870px]  mx-2  mt-4 py-4 rounded-2xl  flex flex-col  flex-wrap'>
                <div className='flex-col flex '>
                    <div className='flex flex-row  px-4 justify-between '>

                        <div className='left flex flex-row relative'>
                            <p className='mt-2 w-[50%] font-bold mr-2 text-sm'>Emploi de temps</p>
                            <select
                                id="presence"
                                className="h-[40px] w-[50%] px-2 pr-10 mb-2 border text-sm border-gray-300 rounded-md appearance-none"
                                value={presence}
                                onChange={handleSetPresence}
                            >
                                <option value="" className="font-semibold">
                                    Journalier
                                </option>
                                <option value="Féminin"> Hebdomadaire</option>
                                <option value="Masculin">Mensuel</option>
                            </select>
                            <div className="absolute top-1 mt-1 right-2 transform -translate-y-1/5 pointer-events-none text-black">
                                <ArrowDropDown />
                            </div>
                        </div>


                    </div>
                    <div className=' w-[870px] '> <Divider /></div>


                    <div className=" bg-white w-[870px]  rounded-xl h-auto pt-2 pb-2 mx-2 flex flex-col">

                        <div className="flex flex-wrap  p-3 justify-between">
                            <div className="left ">
                                <div className="mb-4 relative">
                                    <input
                                        value={globalFilter ?? ""}
                                        onChange={(e) => setGlobalFilter(e.target.value)}
                                        placeholder="Rechercher..."
                                        className="w-[250px] pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <Search
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>
                            <div className="right  ml-2 flex flex-row ">
                                <FilterAltIcon className='mt-2' />
                                <div className='mr-3 relative'>

                                    <select
                                        id="filter"
                                        className="h-[40px] w-[150px]  text-[14px] cursor-pointer px-3 pr-10 mb-2 border border-gray-300 rounded-xl appearance-none"
                                        value={filter}
                                        onChange={handleSetFilter}
                                    >
                                        <option value="" className="font-semibold ">
                                            Trier par
                                        </option>
                                        <option value="Féminin">à définir</option>
                                        <option value="Masculin">à définir</option>
                                    </select>
                                    <div className="absolute top-1  right-3 transform translate-y-1 pointer-events-none text-black">
                                        <ArrowDropDown />
                                    </div>
                                </div>

                                <div className=' flex flex-row relative ml-2  text-titre'>
                                    <select
                                        id="presence"
                                        className=" h-[40px] w-100 bg-gray-200 px-8 pr-10 mb-2 border text-sm border-gray-300 rounded-md text-center appearance-none"
                                        value={presence}
                                        onChange={handleSetPresence}
                                    >
                                        <option value="" className="font-semibold">
                                            Exporter
                                        </option>
                                        <option value="Pdf">Pdf</option>
                                        <option value="Word">Word</option>
                                        <option value="Excel">Excel</option>
                                    </select>
                                    <div className="absolute top-1 mt-1 left-1  transform -translate-y-1/5 pointer-events-none text-titre">
                                        <FileUpload />
                                    </div>
                                    <div className="absolute top-1 mt-1 right-1 transform -translate-y-1/5 pointer-events-none text-titre">
                                        <ArrowDropDown />
                                    </div>
                                </div>



                                <button className=' bg-lightblue text-[12px] hover:text-[14px] mx-4 w-auto h-[40px] rounded-xl justify-center text-white  items-center flex'>
                                    <div className='flex mr-1 justify-center items-center'>
                                        <span> <AddCircleOutline style={{ width: "20px", height: "20px" }} className='justify-center items-center mx-1' /></span>
                                        <p className='mr-1'>Ajouter un planning</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow overflow-x-auto p-auto ">
                            <div className=" bg-white shadow-md rounded-lg ">
                                <table className=" divide-y  divide-gray-200">
                                    <thead className="bg-[#E5F4FF] overflow-x-auto">
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
                                    <tbody className="bg-white divide-y  divide-gray-200">
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

                </div>






            </div>


        </>
    )
}

export default UserActivite
