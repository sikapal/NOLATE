import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search,  } from "lucide-react";
import mockData from "../assets/constants/data6.json";
import Dots from './Dots';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const columnHelper = createColumnHelper();

const columns = [
 
  columnHelper.accessor("appareil", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center ">
       APPAREIL
      </span>
    ),
  }),
  columnHelper.accessor("emplacement", {
    cell: (info) => (
      <span className="italic text-blue-600">{info.getValue()}</span>
    ),
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
        CONNEXION RECENTE
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
            { label: "Infos", action: () => alert(`Deleting ${info.row.original.name}`) },
          { label: "Désactiver", action: () => alert(`Deleting ${info.row.original.name}`) },
          { label: "Supprimer", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
        ]}
      />
    ),
  }),
];

const ParamPointeuse = () => {

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
    <div className=" bg-white w-full rounded-xl h-auto pt-4 pb-2 -mx-1 flex flex-col">
      <h1 className="font-bold p-3">Pointeuses et Appareils</h1>

      <div className="flex flex-wrap  p-3 justify-between">
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
          <FilterAltIcon className='mt-2'/>
          <div className='mr-3 relative'>

            <select
              id="filter"
              className="h-[40px] w-[200px]  cursor-pointer px-3 pr-10 mb-2 border border-gray-300 rounded-xl appearance-none"
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
              <ExpandMoreIcon />
            </div>
          </div>
          <button className=' bg-lightblue text-[14px] hover:text-[14px]  w-[230px] h-[40px] rounded-xl justify-center text-white  items-center flex'>
            <div className='flex mr-1 justify-center items-center'>
              <span> <Add className='justify-center items-center mx-1' /></span>
              <p className='mr-1'>Ajouter nouvelle pointeuse</p>
            </div>
          </button>
        </div>
      </div>

      <div className="flex-grow  p-4 ">
        <div className=" bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
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
  )
}

export default ParamPointeuse
