import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import impacto from '../../public/images/impacto.png';
import Image from 'next/image';
import cortoPlazo from '../../public/images/corto_plazo.png';
import largoPlazo from '../../public/images/largo_plazo.png';

export default function AccordionUsage({ title_1, title_2, title_3 }) {
    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className='font-bold'
                >
                    {title_1}
                </AccordionSummary>
                <AccordionDetails>
                    <div className='flex justify-center items-center'>
                        <div className='w-1/2'>
                            <Typography variant='body1'>
                                Mi objetivo es contribuir al crecimiento y éxito de la empresa mediante la implementación de soluciones eficientes y escalables, así como fomentar un ambiente colaborativo y de aprendizaje continuo.
                            </Typography>
                        </div>
                        <div className='flex justify-center w-1/2'>
                            <Image
                                src={impacto}
                                alt="Descripción de la imagen"
                                width={200}
                                height={100}
                            />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className='font-bold'
                >
                    {title_2}
                </AccordionSummary>
                <AccordionDetails>
                    <div className='flex justify-center items-center'>
                        <div className='w-1/2'>
                            <Typography variant='body1'>
                                En el próximo año, mi objetivo es profundizar en tecnologías emergentes, como inteligencia artificial y desarrollo de aplicaciones móviles, para expandir mi conjunto de habilidades y ser más versátil en mis proyectos.
                            </Typography>
                        </div>
                        <div className='flex justify-center w-1/2'>
                            <Image
                                src={cortoPlazo}
                                alt="Descripción de la imagen"
                                width={200}
                                height={100}
                            />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className='font-bold'
                >
                    {title_3}
                </AccordionSummary>
                <AccordionDetails>
                    <div className='flex justify-center items-center'>
                        <div className='w-1/2'>
                            <Typography variant='body1'>
                                A largo plazo, aspiro a asumir un rol de liderazgo en un equipo de desarrollo, donde pueda guiar y mentorizar a otros, contribuyendo a la creación de soluciones innovadoras que impacten positivamente a los usuarios.
                            </Typography>
                        </div>
                        <div className='flex justify-center w-1/2'>
                            <Image
                                src={largoPlazo}
                                alt="Descripción de la imagen"
                                width={200}
                                height={100}
                            />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
