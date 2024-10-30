import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import { Add } from '@mui/icons-material';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ArrowUpDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Mail, Phone, Search, User, } from "lucide-react";
import mockData from "../../assets/constants/data3.json";
import Dots from '../../components/Dots';


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
   

    columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: () => (
            <span className="flex items-center">
                Date
            </span>
        ),
    }),
    columnHelper.accessor("utilisateur", {
        cell: (info) => (
            <span className="italic text-blue-600">{info.getValue()}</span>
        ),
        header: () => (
            <span className="flex items-center">
               UTILISATEUR
            </span>
        ),
    }),
    columnHelper.accessor("activite", {
        header: (info) => (
            <span className="flex items-center">
                Actvité / Lieu
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("horaire", {
        header: (info) => (
            <span className="flex items-center">
         Plage Horaire
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("auth", {
        header: (info) => (
            <span className="flex items-center">
                 Mode d'AUTH
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("debut", {
        header: (info) => (
            <span className="flex items-center">
                Pointage debut
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("fin", {
        header: (info) => (
            <span className="flex items-center">
            pointage Fin
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
        header: (info) => (
            <span className="flex items-center">
                Status
            </span>
        ),
        cell: (info) => {
            const status = info.getValue();
           
            const statusClass = status === "Présent" ? "text-green" : "text-red";
            return (
                <span className={statusClass}>
                    {status}
                </span>
            );
        },
    }),
    
    columnHelper.accessor("checkup", {
        header: (info) => (
            <span className="flex items-center">
                 Check Up
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("retourInfo", {
        header: (info) => (
            <span className="flex items-center">
              Retour d'INFO
            </span>
        ),
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ACTION", {
        header: "Actions",
        cell: (info) => (
            <Dots
                menuItems={[
                    { label: "Modifier", action: () => alert(`Editing ${info.row.original.name}`) },
                    { 
                        label: "Détail", 
                        action: () => {
                            setModalContent(`Details for ${info.row.original.name}`); 
                            setIsModalOpen(true); 
                        }
                    },
                    { label: "Supprimer", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                ]}
            />
        ),
    }),
];


const FichePresence = () => {

    const [data] = useState(() => [...mockData]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [open, setOpen] = useState(true);
    

    const breadcrumbs = [
        { label: 'Activités' },
        { label: 'Fiche de présence', href: '/fichepresence' },
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



    return (
        <div className="flex max-w-full h-screen  bg-gray-100">
            
            <Sidebar open={open} setOpen={setOpen} />

            <div className="w-full">
                <Header setOpen={setOpen} />

                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                    <div className="mt-3 bg-white max-w-full rounded-xl h-[85vh] flex flex-col ">
                        <h1 className="font-bold p-3">Fiche de présence</h1>
                        
                        <div className="flex flex-wrap p-3 justify-between ">
                            <div className="left flex flex-wrap ">
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
                            <div className="right">
                                <button className=' bg-lightblue text-[16px] hover:text-[16px] m-auto  w-auto h-[40px] rounded-xl justify-center text-white  items-center flex'>
                                    <div className='flex mr-2 justify-center items-center'>
                                        <span> <Add className='justify-center items-center mx-2' /></span>
                                        <p>Ajouter un administrateur</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex-wrap py-4 px-4 scrollbar-custom overflow-y-auto">
                            <div className=" bg-white flex-wrap shadow-md rounded-lg">
                                <table className="min-w-full flex-wrap divide-y divide-gray-200">
                                    <thead className="bg-[#E5F4FF] -mx-[10px] text-[12px] ">
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <tr key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => (
                                                    <th
                                                        key={header.id}
                                                        className="px-1 py-2 text-left text-[10px] w-1 font-bold text-black uppercase "
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
                                                            <ArrowUpDown className="ml-2" size={14} />
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {table.getRowModel().rows.slice(0, table.getState().pagination.pageSize).map((row) => (
                                            <tr key={row.id} className="hover:bg-gray-100">
                                                {row.getVisibleCells().map((cell) => (
                                                    <td
                                                        key={cell.id}
                                                        className="px-1 py-2  whitespace-nowrap text-[12px] text-gray-500"
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
        </div>
    );
};

export default FichePresence;
