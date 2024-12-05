import { Button, Typography } from "@mui/material";
import Image from "next/image";
import resumen from '../../public/images/resumen_bio.png';

export default function ResumenTab({goToAboutMe}) {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-6">
            <div className='mt-6 w-2/3 text-center mb-12'>
                <Typography variant='h5'>Mi misión es <span className='text-blue-600'>transformar</span> ideas en <span className='text-green-600'>experiencias</span> digitales memorables, fusionando <span className='text-green-600'>tecnología</span> y <span className='text-green-600'>creatividad</span> para construir un futuro más <span className='text-red-600'>accesible</span> y <span className='text-red-600'>dinámico</span>.</Typography>
            </div>
            <div className="flex flex-col justify-center items-center gap-9">
                <Image
                    src={resumen}
                    alt="Descripción de la imagen"
                    width={1000}
                    height={1000}
                    className="object-cover rounded-3xl"
                    style={{
                        maskImage: `
                              linear-gradient(to right, white 70%, transparent),
                              linear-gradient(to left, white 70%, transparent),
                              linear-gradient(to top, white 70%, transparent),
                              linear-gradient(to bottom, white 70%, transparent)
                            `,
                        WebkitMaskImage: `
                              linear-gradient(to right, white 70%, transparent),
                                linear-gradient(to left, white 70%, transparent),
                                linear-gradient(to top, white 70%, transparent),
                                linear-gradient(to bottom, white 70%, transparent)
                            `,
                        maskComposite: 'intersect',
                        WebkitMaskComposite: 'intersect',
                    }}
                />
                <div className='w-2/3 flex flex-col justify-center items-center text-center gap-5'>
                    <Typography variant='h5'>Hecha una vistazo a mis últimos proyectos, gustos, estilo de trabajo, experiencia laboral y mucho más</Typography>
                    <Button onClick={goToAboutMe} variant="contained">Mas sobre mí</Button>
                </div>
            </div>
            <div className=''>
            </div>
        </div>
    );
}