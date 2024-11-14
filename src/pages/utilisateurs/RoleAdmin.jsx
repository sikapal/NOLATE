import React, { useState,useRef, useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import { AddCircleOutline, ArrowDropDown } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import mockData from "../../assets/constants/data2.json";
import Dots from '../../components/Dots';
import { Divider } from '@mui/material';
import user from "../../assets/user.jpg"
import RegisterAdmin from '../RegisterAdmin';
import { useNavigate } from 'react-router-dom';



const RoleAdmin = () => {

    const getProfileImage = (assignee) => {
        switch (assignee) {
    
            default:
                return user;
        }
    };
    
    const columnHelper = createColumnHelper();
    
    const columns = [
        columnHelper.accessor("select", {
            header: () => (
                <input type="checkbox" className='cursor-pointer' />
            ),
            cell: () => (
                <input type="checkbox" className='cursor-pointer' />
            ),
        }),
    
    
        columnHelper.accessor("ADMINISTRATEUR", {
            cell: (info) => (
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => navigate(`/admin-profile`)} 
                >
                  {getProfileImage(info.getValue()) && (
                    <img
                      src={getProfileImage(info.getValue())}
                      alt={`${info.getValue()} profile`}
                      className="m-2 w-8 h-8 rounded-full"
                    />
                  )}
                  {info.getValue()}
                </div>
              ),
            header: () => (
                <span className="flex items-center">
                    ADMINISTRATEUR
                </span>
            ),
        }),
        columnHelper.accessor("AJOUTER LE", {
            cell: (info) => (
                <span className="italic text-blue-600">{info.getValue()}</span>
            ),
            header: () => (
                <span className="flex items-center">
                    AJOUTER LE
                </span>
            ),
        }),
        columnHelper.accessor("RÔLE", {
            header: (info) => (
                <span className="flex items-center">
                    RÔLE
                </span>
            ),
            cell: (info) => {
                const role = info.getValue();
    
    
                const backgroundColor = role === "Administrateur" ? "bg-[#89f299]" : role === "Gestionnaire" ? " bg-[#e9d0fe] " : "";
                const textClass = role === "Gestionnaire" ? "text-violet opacity-[80%]" : "text-green";
    
                return (
                    <span className={`px-2 py-1 rounded-xl ${backgroundColor} ${textClass}`}>
                        {role}
                    </span>
                );
            },
        }),
    
        columnHelper.accessor("NIVEAU D'ACCES", {
            header: (info) => (
                <span className="flex items-center">
                    NIVEAU D'ACCES
                </span>
            ),
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("UNITE DE GESTION", {
            header: (info) => (
                <span className="flex items-center">
                    UNITE DE GESTION
                </span>
            ),
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("ACTION", {
            header: "Actions",
            cell: (info) => (
                <Dots
                    menuItems={[
                        { label: "Autorisations", action: () => alert(`Editing ${info.row.original.name}`) },
                        { label: "Voir le profil", action: () => alert(`Deleting ${info.row.original.name}`) },
                        { label: "Supprimer", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                    ]}
                />
            ),
        }),
    ];
    

    const [data] = useState(() => [...mockData]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [open, setOpen] = useState(true);
    const [showModalRegisterAdmin, setShowModalRegisterAdmin] = useState(false);
    const modalRef = useRef(null); 
    const navigate = useNavigate();

    const breadcrumbs = [
        { label: 'Utilisateurs' },
        { label: 'Admin', href: '/admintable' },
    ];

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModalRegisterAdmin(false); // Close modal if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    

    return (
        <div className="flex max-w-full h-screen bg-gray-100">

            <Sidebar open={open} setOpen={setOpen} />

            <div className="w-full">
                <Header setOpen={setOpen} />

                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                    <div className="mt-3 bg-white w-full rounded-xl h-[85vh] flex flex-col">
                        <h1 className="font-bold p-3">Rôle des administrateurs</h1>

                        <Divider />

                        <div className="flex flex-wrap  px-3 pt-4 justify-between">
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
                            <div className="right  flex flex-row ">
                                <FilterAltIcon className='mt-2' />
                                <div className=' relative'>

                                    <select
                                        id="filter"
                                        className="h-[40px] w-[250px]  text-[14px] cursor-pointer px-3 pr-10 mb-2 border border-gray-300 rounded-xl appearance-none"
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

                                <button className=' bg-lightblue text-[12px] hover:text-[14px] mx-4 w-auto h-[40px] rounded-xl justify-center text-white  items-center flex'>
                                    <div className='flex mr-1 justify-center items-center'>
                                        <span> <AddCircleOutline style={{ width: "20px", height: "20px" }} className='justify-center items-center mx-1' /></span>
                                        <p className='mr-1' onClick={() => {

                                            setShowModalRegisterAdmin(true)


                                        }}>Ajouter un administrateur</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 scrollbar-custom">
                            <div className=" bg-white shadow-md rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <tr key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => (
                                                    <th
                                                        key={header.id}
                                                        className="px-6 py-3 text-left text-[10px]  font-bold text-slate-500 uppercase tracking-wider"
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
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
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
            {showModalRegisterAdmin && (
                <div ref={modalRef}>
                    <RegisterAdmin setShowModalRegisterAdmin={setShowModalRegisterAdmin} />
                </div>
            )}
        </div>
    );
};

export default RoleAdmin;
