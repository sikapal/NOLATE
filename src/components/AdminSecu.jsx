import React, { useState } from 'react';
import { Add, Key } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Mail, Phone, Search, User, } from "lucide-react";
import mockData from "../assets/constants/data8.json";
import Dots from './Dots';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import user from "../assets/user.jpg"

const columnHelper = createColumnHelper();


const getphoneImage = (appareil) => {
    switch (appareil) {

        default:
            return user;
    }
};

const AdminSecu = () => {

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

            <div className=" bg-white mx-2 rounded-2xl mb-4 h-auto pt-2 pb-2 shadow-lg  flex flex-col">
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

                <div className="flex-grow mt-2 px-2 mb-2">
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

            <div className=" bg-white mx-2 rounded-2xl h-auto pt-4  mt-4 pb-4 flex flex-col shadow-2xl">
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

            <div className=" bg-white mx-2 rounded-2xl h-auto pt-4  mt-4 pb-4 flex flex-col shadow-2xl">
                <div className='flex flex-row justify-between mx-3 '>
                    <h1 className="font-bold  ">Authentification à double facteurs</h1>
                    <button className='bg-lightblue mx-3 py-1 px-3 text-[12px] text-white rounded  '> <span>
                        <Key
                            style={{ width: "14px", height: "14px", marginRight: "5px" }}
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
