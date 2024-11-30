import React, { useState } from 'react';

import { AddCircleOutline, ArrowDropDown, Cancel, DeleteForeverOutlined, FileUpload } from '@mui/icons-material';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel,   getPaginationRowModel,useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, CircleCheck, CrossIcon, Search } from "lucide-react";
import mockData from "../assets/constants/data3.json";


import { ChatBubbleOutline } from '@mui/icons-material';


const columnHelper = createColumnHelper();


const Testable = () => {

    const [data] = useState(() => [...mockData]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");


    const columns = [
        columnHelper.accessor("select", {
            header: () => (
                <input type="checkbox" className='cursor-pointer' />
            ),
            cell: () => (
                <input type="checkbox" className='cursor-pointer' />
            ),
        }),
        columnHelper.accessor("date", {
            cell: (info) => info.getValue(),
            header: "Date",
        }),
        columnHelper.accessor("utilisateur", {

            header: "UTILISATEUR",


            cell: (info) => {
                const utilisateur = info.getValue();
                const poste = info.row.original.poste;

                return (
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => navigate(`/user-profile`)}
                    >

                        <div>
                            <span>{utilisateur}</span>
                            {poste && <><br /><span className="text-gray-500">{poste}</span></>}
                        </div>
                    </div>
                );
            },

        }),
        columnHelper.accessor("activite", {
            header: () => (
                <span className="flex items-center ">
                    Actvité / <br /> Lieu
                </span>
            ),

            cell: (info) => {
                const activite = info.getValue();
                const lieu = info.row.original.lieu;
                return (
                    <span>
                        {activite}
                        {lieu && <><br />{lieu}</>}
                    </span>
                );
            },
        }),
        columnHelper.accessor("horaire", {
            header: () => (
                <span className="flex items-center">
                    Plage <br />Horaire
                </span>
            ),
            cell: (info) => {
                const [start, end] = info.getValue().split(" - ");
                return (
                    <div>
                        <div>{start}</div>
                        <div>{end}</div>
                    </div>
                );
            },
        }),
        columnHelper.accessor("auth", {

            header: () => (<span className="flex items-center ">
                Mode  <br />D'AUTH
            </span>),

            cell: (info) => {
                const [start, end] = info.getValue().split(" ");
                return (
                    <div>
                        <div>{start}</div>
                        <div>{end}</div>
                    </div>
                );
            },
        }),
        columnHelper.accessor("debut", {

            header: () => (<span className="flex items-center ">
                POINTAGE  <br />DEBUT
            </span>),

            cell: (info) => {

                const value = info.getValue();
                return (
                    <div className="flex flex-row items-center  space-x-2">
                        {value === "" ? (
                            <div className=" flex mx-4 flex-row text-red justify-center text-center items-center">
                                <Cancel style={{ width: "15px", height: "15px", color: "red" }} />
                            </div>
                        ) : (
                            <div className='flex flex-row items-center '> <span>{info.getValue()}</span>
                                <CircleCheck className=" w-3 h-3 bg-gray-400 rounded-2xl text-white ml-2" /></div>
                        )}

                    </div>
                )
            },
        }),
        columnHelper.accessor("fin", {
            header: () => (<span className="flex items-center ">
                POINTAGE  <br />FIN
            </span>),

            cell: (info) => {

                const value = info.getValue();
                return (
                    <div className="flex flex-row items-center  space-x-2">
                        {value === "" ? (
                            <div className=" flex mx-4 flex-row text-red justify-center text-center items-center">
                                <Cancel style={{ width: "15px", height: "15px", color: "red" }} />
                            </div>
                        ) : (
                            <div className='flex flex-row items-center '> <span>{info.getValue()}</span>
                                <CircleCheck className=" w-3 h-3 bg-gray-400 rounded-2xl text-white ml-2" /></div>
                        )}

                    </div>
                )
            },
        }),
        columnHelper.accessor("status", {
            header: "Status",
            cell: (info) => {
                const status = info.getValue();
                const statusClass = status === "Présent" ? "text-green" : "text-red";
                return <span className={statusClass}>{status}</span>;
            },
        }),
        columnHelper.accessor("checkup", {
            header: () => (<span className="flex items-center ">
                CHECK <br />UP
            </span>),
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("retourInfo", {
            header: () => (<span className="flex items-center ">
                RETOUR  <br />D'INFO
            </span>),
            cell: (info) => {
                const value = info.getValue();
                return (
                    <div className="flex items-center text-center justify-center">
                        {value === "info" ? (
                            <ChatBubbleOutline
                                className="  text-blue-500"
                                style={{ width: "20px", height: "20px", color: "blue" }}
                            />
                        ) : (
                            <span>-</span>
                        )}
                    </div>
                );
            },
        }),
        columnHelper.accessor("ACTION", {
            header: "Actions",
            cell: (info) => {

                const value = info.getValue();
                return (
                    <div className="flex flex-row items-center  space-x-2">
                        geh

                    </div>
                )
            },
        })
    ];

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        getPaginationRowModel: getPaginationRowModel(), // Enable pagination
        initialState: {
            pagination: {
                pageSize: 5, // Initial number of rows per page
            },
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
    });
    return (
        <div>
            <div className="flex-wrap -mt-2 px-4 overflow-y-auto">
                <div className="bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#E5F4FF] text-[12px]">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className="px-1 py-2 text-left text-[12px] font-bold text-titre uppercase">
                                            <div
                                                {...{
                                                    className: header.column.getCanSort()
                                                        ? "cursor-pointer select-none flex items-center"
                                                        : "",
                                                    onClick: header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}

                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-100">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-1 py-2 text-[12px] text-gray-500">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex flex-row justify-between mx-4'>
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
                        <span className="ml-1">sur {table.getPageCount()}</span>
                    </span>

                    <button
                        className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
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
    )
}

export default Testable
