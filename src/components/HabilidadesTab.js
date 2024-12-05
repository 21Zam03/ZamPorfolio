import { Tooltip, Typography } from "@mui/material";

import { DiMysql } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { TbBrandTypescript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiAngular } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiPowerbi } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaJira } from "react-icons/fa";

import comunicacion_efectiva from '../../public/images/comunicacion_efectiva.png';
import adaptabilidad from '../../public/images/adaptabilidad.png';
import proactividad from '../../public/images/proactividad.png';
import creatividad from '../../public/images/creatividad.png';
import Image from "next/image";

export default function HabilidadesTab() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-6">
            <div className='flex flex-col gap-5 px-5 py-14 w-2/3 border rounded-xl'>
                <div className='flex flex-col w-full justify gap-5'>
                    <Typography variant='h3' className='text-center'>
                        Habilidades técnicas
                    </Typography>
                    <Typography variant='body1' className="text-center">
                        Cuento con una sólida formación en diversas tecnologías y herramientas de desarrollo web. Mis habilidades abarcan lenguajes de programación como JavaScript y Java, frameworks y librerias como React y Next js, y gestión de bases de datos tanto relacionales como no relacionales.
                    </Typography>
                </div>
                <div className='grid grid-cols-2 justify-center items-center h-full p-5 gap-20'>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2'>
                            <Typography variant='h5'>Bases de datos</Typography>
                            <div className="w-1/12 h-1 bg-blue-500"></div>
                            <Typography variant='body1'>
                                Tengo experiencia en el manejo de gestores de bases de datos, tanto relacionales como no relacionales</Typography>
                        </div>
                        <div className='flex justify-start items-center gap-5 rounded-2xl'>
                            <Tooltip title="Mysql" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><DiMysql size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Sql Server" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><DiMsqlServer size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Mongo Db" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><DiMongodb size={25} /></div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2'>
                            <Typography variant='h5'>Lenguajes de programción</Typography>
                            <div className="w-1/12 h-1 bg-green-500"></div>
                            <Typography variant='body1'>Desarrollo aplicaciones utilizando lenguajes como java, javascript y typescript</Typography>
                        </div>
                        <div className='flex justify-start items-center gap-5 rounded-2xl'>
                            <Tooltip title="Java" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><FaJava size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Javascript" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><MdJavascript size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Typescript" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><TbBrandTypescript size={25} /></div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2'>
                            <Typography variant='h5'>Desarrollo Web</Typography>
                            <div className="w-1/12 h-1 bg-yellow-500"></div>
                            <Typography variant='body1'>Desarrollo aplicaciones web utilizando tecnologias como html, css, bootstrap, jquery, etc</Typography>
                        </div>
                        <div className='flex justify-start items-center gap-5 rounded-2xl'>
                            <Tooltip title="Html" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><FaHtml5 size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Css" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><FaCss3 size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Bootstrap" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><TbBrandBootstrap size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Tailwind" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><RiTailwindCssFill size={25} /></div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2'>
                            <Typography variant='h5'>Frameworks</Typography>
                            <div className="w-1/12 h-1 bg-red-500"></div>
                            <Typography variant='body1'>Desarrollo utilizando frameworks tanto como para el frontend y backend</Typography>
                        </div>
                        <div className='flex justify-start items-center gap-5 rounded-2xl'>
                            <Tooltip title="React js" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><RiReactjsFill size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Spring boot" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><BiLogoSpringBoot size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Angular" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><SiAngular size={25} /></div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-5 p-2'>
                        <div className='flex flex-col gap-2'>
                            <Typography variant='h5'>Otras Herramientas</Typography>
                            <div className="w-1/12 h-1 bg-pink-500"></div>
                            <Typography variant='body1'>Herramientas adicionales en la cuales me apoyo para el desarrollo de mis proyectos</Typography>
                        </div>
                        <div className='flex justify-start items-center gap-5 rounded-2xl'>
                            <Tooltip title="Excel" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><PiMicrosoftExcelLogoFill size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Power Bi" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><SiPowerbi size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Git Hub" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'><FaGithub size={25} /></div>
                            </Tooltip>
                            <Tooltip title="Jira" arrow>
                                <div className='p-3 border rounded-full shadow-lg cursor-pointer'>
                                    <FaJira size={25} />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 p-5 w-2/3 border rounded-xl'>
                <div className='w-full'>
                    <Typography variant='h3' className='text-center'>
                        Habilidades Blandas
                    </Typography>
                </div>
                <div className='grid grid-cols-1 justify-center items-center h-full p-5 gap-10'>
                    <div className='col-span-1 flex gap-5 items-center border rounded-lg p-5'>
                        <Image
                            src={comunicacion_efectiva}
                            alt="Descripción de la imagen"
                            width={150}
                            height={150}
                        />
                        <div>
                            <Typography variant='h5'>
                                Comunicación efectiva
                            </Typography>
                            <Typography variant='body1'>
                                Poseo habilidades de comunicación efectiva, lo que me permite transmitir ideas claramente y colaborar de manera productiva con equipos multidisciplinarios, facilitando el entendimiento y la resolución de problemas.
                            </Typography>
                        </div>
                    </div>
                    <div className='col-span-1 flex gap-5 items-center border rounded-lg p-5'>
                        <Image
                            src={adaptabilidad}
                            alt="Descripción de la imagen"
                            width={150}
                            height={150}
                        />
                        <div>
                            <Typography variant='h5'>
                                Adaptabilidad
                            </Typography>
                            <Typography variant='body1'>
                                Soy adaptable y flexible, capaz de enfrentar cambios y nuevos desafíos con rapidez, ajustando mi enfoque para satisfacer las necesidades del proyecto y del equipo.
                            </Typography>
                        </div>
                    </div>
                    <div className='col-span-1 flex gap-5 items-center border rounded-lg p-5'>
                        <Image
                            src={proactividad}
                            alt="Descripción de la imagen"
                            width={150}
                            height={150}
                        />
                        <div>
                            <Typography variant='h5'>
                                Proactividad
                            </Typography>
                            <Typography variant='body1'>
                                Soy proactivo, anticipándome a las necesidades y problemas, lo que me permite tomar la iniciativa en proyectos y contribuir a la mejora continua del equipo y los procesos.
                            </Typography>
                        </div>
                    </div>
                    <div className='col-span-1 flex gap-5 items-center border rounded-lg p-5'>
                        <Image
                            src={creatividad}
                            alt="Descripción de la imagen"
                            width={150}
                            height={150}
                        />
                        <div>
                            <Typography variant='h5'>
                                Creatividad
                            </Typography>
                            <Typography variant='body1'>
                                Poseo una fuerte creatividad, generando soluciones innovadoras y enfoques originales para resolver problemas, lo que enriquece el desarrollo de proyectos y mejora la experiencia del usuario.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 