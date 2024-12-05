import { Button, IconButton, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

import proyect2 from '../../public/images/proyect2.jpg';
import proyect3 from '../../public/images/proyect3.jpg';
import ProjectComponent from "./projects-c/ProjectComponent";

export default function ProyectoTab() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-6 w-full">
            <div className='flex flex-col gap-5 px-5 py-14 w-2/3 border rounded-xl'>
                <div className='flex flex-col w-full justify gap-5'>
                    <Typography variant='h3' className='text-center'>
                        Proyectos
                    </Typography>
                    <Typography variant='body1' className="text-center">
                        Presento una selección de proyectos desarrollados que reflejan mis habilidades y experiencia en el ámbito del desarrollo web. Cada proyecto abarca diferentes aspectos de la tecnología, desde aplicaciones de comercio electrónico hasta sistemas de gestión y plataformas interactivas. 
                    </Typography>
                </div>
                <div className='grid grid-cols-2 justify-center items-center h-full p-5 gap-20'>
                    <ProjectComponent/>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2 border rounded-xl overflow-hidden shadow-sm'>
                            <Image
                                src={proyect2}
                                alt="Descripción de la imagen"
                                className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                            />
                            <div className="flex flex-col p-5 gap-2">
                                <Typography variant='h5'>Web de reservas de habitaciones</Typography>
                                <div className="w-1/12 h-1 bg-green-500"></div>
                                <Typography variant='body1'>
                                    Esta web facilita la reserva de habitaciones en un hotel. Los usuarios pueden buscar opciones de alojamiento aplicando filtros.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="small" className="font-bold">Ver código</Button>
                                    <Button size="small" className="font-bold">Probar App</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2 border rounded-xl overflow-hidden shadow-sm'>
                            <Image
                                src={proyect3}
                                alt="Descripción de la imagen"
                                className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                            />
                            <div className="flex flex-col p-5 gap-2">
                                <Typography variant='h5'>Sistema de recomendación de productos</Typography>
                                <div className="w-1/12 h-1 bg-yellow-500"></div>
                                <Typography variant='body1'>
                                    La plataforma permite a los usuarios descubrir nuevos artículos que se alinean con sus intereses, mejorando así la satisfacción.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="small" className="font-bold">Ver código</Button>
                                    <Button size="small" className="font-bold">Probar App</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2 border rounded-xl overflow-hidden shadow-sm'>
                            <Image
                                src={proyect3}
                                alt="Descripción de la imagen"
                                className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                            />
                            <div className="flex flex-col p-5 gap-2">
                                <Typography variant='h5'>App de videoconferencia</Typography>
                                <div className="w-1/12 h-1 bg-red-500"></div>
                                <Typography variant='body1'>
                                    La plataforma permite a los usuarios descubrir nuevos artículos que se alinean con sus intereses, mejorando así la satisfacción.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="small" className="font-bold">Ver código</Button>
                                    <Button size="small" className="font-bold">Probar App</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2 border rounded-xl overflow-hidden shadow-sm'>
                            <Image
                                src={proyect3}
                                alt="Descripción de la imagen"
                                className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                            />
                            <div className="flex flex-col p-5 gap-2">
                                <Typography variant='h5'>App Social Universitaria</Typography>
                                <div className="w-1/12 h-1 bg-pink-500"></div>
                                <Typography variant='body1'>
                                    La plataforma permite a los usuarios descubrir nuevos artículos que se alinean con sus intereses, mejorando así la satisfacción.
                                </Typography>
                                <div className="flex gap-2">
                                    <Button size="small" className="font-bold">Ver código</Button>
                                    <Button size="small" className="font-bold">Probar App</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}