import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import { AddCircleOutline, ArrowDropDown, Cancel, DeleteForeverOutlined, FileUpload } from '@mui/icons-material';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, CircleCheck,  Search } from "lucide-react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import mockData from "../../assets/constants/data3.json";
import Dots from '../../components/Dots';
import DetailPresence from '../../components/DetailPresence';
import SlidePlanning from '../activites/SlidePlanning';
import user from "../../assets/user.jpg"
import { ChatBubbleOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';

const columnHelper = createColumnHelper();

const FichePresence = () => {
    const [data] = useState(() => [...mockData]);
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [open, setOpen] = useState(true);
    const [detailData, setDetailData] = useState(null);
    const [showModalDelete, setShowModalDelete] = useState(false);


    const closeModalDelete = () => setShowModalDelete(false);

    const handleDelete = () => {

        console.log('Item deleted');
        closeModalDelete();
    };

    const [showModalNewPlanning, setShowModalNewPlanning] = useState(false);


    const breadcrumbs = [
        { label: 'Activités' },
        { label: 'Fiche de présence', href: '/fichepresence' },
    ];


    const getProfileImage = (assignee) => {
        switch (assignee) {
            case 'John':
                return user;
            case 'Jane':
                return user;

            default:
                return user;
        }
    };
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
                        {getProfileImage(utilisateur) && (
                            <img
                                src={getProfileImage(utilisateur)}
                                alt={`${utilisateur} profile`}
                                className="m-2 w-8 h-8 rounded-full"
                            />
                        )}
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
            cell: (info) => (
                <Dots
                    menuItems={[
                        {
                            label: "Modifier", action: () => {
                                setShowModalNewPlanning(true);
                            }
                        },
                        {
                            label: "Détail",

                            action: () => {

                                setDetailData(null);
                                setTimeout(() => setDetailData(info.row.original), 0);
                            }
                        },
                        { label: "Supprimer", action: () => { { setShowModalDelete(true) } }, color: "red" },
                    ]}
                />
            ),
        }),
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
        getPaginationRowModel: getPaginationRowModel(),
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
    });


    const [filter, setFilter] = useState('');
    const navigate = useNavigate();
    const handleSetFilter = (event) => {
        setFilter(event.target.value);
    };



    return (
        <div className="flex max-w-full h-screen bg-gray-100">
            <Sidebar open={open} setOpen={setOpen} />
            <div className="w-full">
                <Header setOpen={setOpen} />
                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />
                    <div className="mt-3 bg-white max-w-full rounded-xl h-[85vh] flex flex-col">
                        <h1 className="font-bold p-3">Fiche de présence</h1>

                        <Divider/>
                        <div className="flex flex-wrap p-3 pt-4 justify-between">
                            <div className="left flex flex-wrap">
                                <div className="mb-4 relative">
                                    <input
                                        value={globalFilter ?? ""}
                                        onChange={(e) => setGlobalFilter(e.target.value)}
                                        placeholder="Rechercher..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>


                            <div className="right  ml-2 flex flex-row ">
                                <FilterAltIcon className='mt-2' />
                                <div className='mr-3 relative'>

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

                                <div className=' flex flex-row relative ml-2  text-titre'>
                                    <select
                                        id=""
                                        className=" h-[40px] w-100 bg-gray-200 px-8 pr-10 mb-2 border text-sm border-gray-300 rounded-md text-center appearance-none"
                                        value=""
                                        onChange=""
                                    >
                                        <option value="" className="font-semibold -ml-4 bg-white text-black justify-center">
                                            Exporter
                                        </option>
                                        <option className="font-semibold bg-white text-black justify-center" value="Pdf">Pdf</option>
                                        <option className="font-semibold bg-white text-black justify-center" value="Word">Word</option>
                                        <option className="font-semibold bg-white text-black justify-center" value="Excel">Excel</option>
                                    </select>
                                    <div className="absolute top-1 mt-1 left-1  transform -translate-y-1/5 pointer-events-none text-titre">
                                        <FileUpload />
                                    </div>
                                    <div className="absolute top-1 mt-1 right-1 transform -translate-y-1/5 pointer-events-none text-titre">
                                        <ArrowDropDown />
                                    </div>
                                </div>



                                <button className=' bg-lightblue text-[14px]  ml-4 w-auto h-[40px] rounded-xl justify-center text-white  items-center flex'>
                                    <div className='flex justify-center px-2 items-center'>
                                        <span> <AddCircleOutline style={{ width: "20px", height: "20px" }} className='justify-center items-center mx-1' /></span>
                                        <p className='mr-1 ' onClick={() => {

                                            setShowModalNewPlanning(true);


                                        }}>Ajouter une présence</p>
                                    </div>
                                </button>
                            </div>
                        </div>
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
                                                        <span className="ml-1">sur {table.getPageCount()}</span>
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
                    {detailData && (
                        <DetailPresence data={detailData} onClose={() => setDetailData(null)} />
                    )}


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
            {showModalNewPlanning && <SlidePlanning setShowModalNewPlanning={setShowModalNewPlanning} />}
        </div>
    );
};

export default FichePresence;
