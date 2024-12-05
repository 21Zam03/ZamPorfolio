import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Image from 'next/image';
import desarrollo_web from '../../public/images/desarrollo_web.png';
import ciberseguridad from '../../public/images/ciberseguridad.png';
import inteligencia_artificial from '../../public/images/inteligencia_artificial.png';
import blockchain from '../../public/images/blockchain.png';
import futbol from '../../public/images/futbol.png';
import ajedrez from '../../public/images/ajedrez.png';
import edm from '../../public/images/edm.png';
import piano from '../../public/images/piano.png';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', width: "15%", flexShrink: 0 }}
            >
                <Tab label="Tecnología" {...a11yProps(0)} />
                <Tab label="Deporte" {...a11yProps(1)} />
                <Tab label="Musica" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className='flex flex-col gap-10'>
                    <div className="flex w-full gap-5 justify-center">
                        <div className='flex flex-col justify-center items-start w-1/2'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Desarrollo de aplicaciones Web
                            </Typography>
                            <Typography variant='body1'>
                                Me apasiona el mundo web, disfruto del desafío de combinar diseño y funcionalidad, creando experiencias que realmente impactan a los usuarios.
                            </Typography>
                        </div>
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={desarrollo_web}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-5 justify-center">
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={ciberseguridad}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <div className='w-1/2 flex flex-col justify-center'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Ciberseguridad
                            </Typography>
                            <Typography variant='body1'>
                                Me motiva proteger sistemas y datos críticos de amenazas, disfrutando del desafío de anticipar ataques y desarrollar soluciones robustas para salvaguardar la información.
                            </Typography>
                        </div>
                    </div>
                    <div className="flex w-full gap-5 justify-center">
                        <div className='flex flex-col justify-center items-start w-1/2'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Inteligencia artificial
                            </Typography>
                            <Typography variant='body1'>
                                Me apasiona la inteligencia artificial por su capacidad de transformar nuestra interacción con la tecnología. La creación de sistemas que aprenden y se adaptan me fascina.
                            </Typography>
                        </div>
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={inteligencia_artificial}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-5 justify-center">
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={blockchain}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <div className='w-1/2 flex flex-col justify-center'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Blockchain
                            </Typography>
                            <Typography variant='body1'>
                                Me apasiona la tecnología blockchain por su potencial para transformar la gestión de datos y transacciones. La descentralización y la transparencia me inspiran a explorar aplicaciones innovadoras
                            </Typography>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='flex flex-col gap-10'>
                    <div className="flex w-full gap-5 justify-center">
                        <div className='flex flex-col justify-center items-start w-1/2'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Futbol
                            </Typography>
                            <Typography variant='body1'>
                                Para mí, el fútbol es más que un deporte; es una forma de vida que enseña disciplina, perseverancia y el valor de la colaboración.
                            </Typography>
                        </div>
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={futbol}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-5 justify-center">
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={ajedrez}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <div className='w-1/2'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Ajedrez
                            </Typography>
                            <Typography variant='body1'>
                                El ajedrez no es solo un juego, sino una forma de arte que fomenta la paciencia, la concentración y la toma de decisiones calculadas.
                            </Typography>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div className='flex flex-col gap-10'>
                    <div className="flex w-full gap-5 justify-center">
                        <div className='flex flex-col justify-center items-start w-1/2'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Musica electronica - EDM
                            </Typography>
                            <Typography variant='body1'>
                                El EDM me apasiona por su energía vibrante y la capacidad de conectar a las personas a través de la música.
                            </Typography>
                        </div>
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={edm}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-5 justify-center">
                        <div className="flex w-1/3 overflow-hidden rounded-xl cursor-pointer">
                            <Image
                                src={piano}
                                alt="Descripción de la imagen"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                            />
                        </div>
                        <div className='flex flex-col justify-center items-start w-1/2'>
                            <Typography variant='h6' sx={{ color: "gray" }}>
                                Piano
                            </Typography>
                            <Typography variant='body1'>
                                El piano es una de mis grandes pasiones. Tocar este instrumento me permite expresar mis emociones y contar historias a través de la música.
                            </Typography>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Box>
    );
}