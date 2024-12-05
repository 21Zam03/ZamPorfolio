import { Typography } from "@mui/material";
import AccordionUsage from "./AccordionComponent";
import VerticalTabs from "./TabsInterests";

export default function SobreMiTab() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-6">
            <div className='grid grid-cols-2 w-2/3 border rounded-xl px-5 py-14 gap-5'>
                <div className='w-full col-span-2 relative text-center'>
                    <Typography variant='h3'>
                        Introducción personal
                    </Typography>
                </div>
                <div className='flex col-span-2 flex-col gap-5 text-center'>
                    <Typography variant='body1'>
                        Soy un estudiante de octavo ciclo en Ingeniería de Sistemas en la Universidad Autónoma del Perú. Mi objetivo es integrarme a una organización donde pueda expandir mi horizonte profesional, enriquecer mi conocimiento, experiencia y estar al frente de la innovación tecnológica.
                    </Typography>
                </div>
                <div className='flex justify-around col-span-2'>
                    <div className='flex flex-col w-2/5 p-4 gap-3'>
                        <Typography variant='h5'>
                            Apasionado
                        </Typography>
                        <div className="w-1/12 h-1 bg-blue-500"></div>
                        <Typography>
                            Busco oportunidades para combinar mi pasión por el desarrollo de software con la capacidad de diseñar y optimizar proyectos desafiantes.
                        </Typography>
                    </div>
                    <div className="border-l border-gray-300 h-full mx-4"></div>
                    <div className='flex flex-col w-2/5 p-4 gap-3'>
                        <Typography variant='h5'>
                            Comprometido
                        </Typography>
                        <div className="w-1/12 h-1 bg-orange-500"></div>
                        <Typography>
                            Comprometido con el aprendizaje continuo, soy proactivo y enfocado en mejorar mis habilidades en ambas áreas para contribuir a proyectos innovadores y de alto impacto.
                        </Typography>
                    </div>
                </div>
                <div className='flex justify-around col-span-2'>
                    <div className='flex flex-col w-2/5 p-4 gap-3'>
                        <Typography variant='h5'>
                            Colaborativo
                        </Typography>
                        <div className="w-1/12 h-1 bg-green-500"></div>
                        <Typography>
                            Creo firmemente que la diversidad de perspectivas enriquece el proceso creativo y mejora los resultados finales. Me destaco en fomentar un ambiente de comunicación abierta, donde todos los miembros se sienten valorados y motivados a contribuir con sus ideas.
                        </Typography>
                    </div>
                    <div className="border-l border-gray-300 h-full mx-4"></div>
                    <div className='flex flex-col w-2/5 p-4 gap-3'>
                        <Typography variant='h5'>
                            Adaptable
                        </Typography>
                        <div className="w-1/12 h-1 bg-red-500"></div>
                        <Typography>
                            He desarrollado la capacidad de aprender nuevas herramientas y lenguajes de programación con rapidez, lo que me permite integrar soluciones innovadoras en mis proyectos.
                        </Typography>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 w-2/3 border rounded-xl px-5 py-14 gap-5'>
                <div className='w-full col-span-2 relative text-center'>
                    <Typography variant='h3'>
                        Objetivos profesionales
                    </Typography>
                </div>
                <div className='col-span-2'>
                    <AccordionUsage title_1={"Impacto en la empresa"} title_2={"Metas a corto plazo"} title_3={"Metas a largo plazo"} />
                </div>
            </div>

            <div className='grid grid-cols-2 w-2/3 border rounded-xl px-5 py-14 gap-5'>
                <div className='w-full col-span-2 relative text-center'>
                    <Typography variant='h3'>
                        Intereses personales
                    </Typography>
                </div>
                <div className='col-span-2'>
                    <VerticalTabs />
                </div>
            </div>
        </div>
    );
}