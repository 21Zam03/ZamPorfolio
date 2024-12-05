import { Typography } from "@mui/material";
import LeftPositionedTimeline from "./TimeLineComponent";

export default function ExperienciaLaboral() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-6 w-full">
            <div className='flex flex-col gap-5 px-5 py-14 w-2/3 border rounded-xl'>
                <div className='flex flex-col w-full justify gap-5'>
                    <Typography variant='h3' className='text-center'>
                       Experiencia laboral
                    </Typography>
                    <Typography variant='body1' className="text-center">
                    En esta sección, detallo mi experiencia laboral tanto en lo profesional como en sectores diversos. He trabajado en diferentes rubros, contribuyendo a proyectos significativos que abarcan ideas innovadoras llevando la experiencia del usuario a otro nivel.
                    </Typography>
                </div>
                <div className='flex justify-center items-center h-full p-5 gap-20'>
                    <LeftPositionedTimeline/>
                </div>
            </div>
        </div>
    );
}