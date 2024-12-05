import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import photo from '../../public/images/zam.jpeg';
import Image from 'next/image';
import { Avatar, IconButton, Typography } from '@mui/material';
import { Download, GitHub, LinkedIn } from '@mui/icons-material';

export default function AccordionUsage() {
    const goToGitHub = () => {
        window.open("https://github.com/21zam03", "_blank");
    };

    const goToLinkedin = () => {
        window.open("https://www.linkedin.com/in/21jose03", "_blank");
    };

    return (
        <div>
            <Accordion defaultExpanded className=''>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className=''
                >
                    <div className='flex items-center gap-2'>
                        <Avatar alt="Descripción" src={photo.src} sx={{ width: 25, height: 25 }} className='border-white shadow-2xl' />
                        <span className='text-gray-500 text-sm'>@JoseZam</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="w-full border rounded-lg p-10">
                        <div className='flex gap-5 justify-center items-center w-full h-full'>
                            <div className='flex justify-center items-center'>
                                <Image
                                    style={{ maskImage: "linear-gradient(black 80%, transparent)" }}
                                    src={photo}
                                    alt="Descripción de la imagen"
                                    width={150}
                                    height={100}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex'>
                                    <Typography variant='body1'>
                                        Hola, mi nombre es <br />
                                        <span className='text-green-500 font-bold text-4xl'>
                                            Jose Zambrano
                                        </span> <br />
                                        soy un desarrollador
                                        <span className='text-orange-500 text-4xl font-bold'> Full Stack</span> <br />
                                        <span className='text-gray-500'>apasionado por la tecnología, inteligencia artificial y el desarrollo web</span>
                                    </Typography>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-start items-center'>
                                        <IconButton onClick={goToGitHub}>
                                            <GitHub />
                                        </IconButton>
                                        <IconButton onClick={goToLinkedin}>
                                            <LinkedIn />
                                        </IconButton>
                                    </div>
                                    <div className='flex justify-start items-center p-3'>
                                        <a href="/files/cv.pdf" target='_blank'>
                                            <Button variant="contained" color="warning" endIcon={<Download />}>Descargar CV</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
