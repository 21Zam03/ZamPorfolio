import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import { Code, Microsoft, Storage, Web, Work } from '@mui/icons-material';
import { Typography } from '@mui/material';

import javascript_image from '../public/images/javascript.png';
import java_image from '../public/images/java_image.jpg';
import Image from 'next/image';

const actions = [
    { icon: <Code />, name: 'Lenguajes'},
    { icon: <Web />, name: 'Web'},
    { icon: <Work />, name: 'Frameworks'},
    { icon: <Storage />, name: 'Datos'},
    { icon: <Microsoft />, name: 'Microsoft'},
    { icon: <ShareIcon />, name: 'Versiones'},
];

export default function SpeedDialTooltipOpen() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedAction, setSelectedAction] = React.useState(null);

    const handleActionClick = (action) => {
        setSelectedAction(action);
        handleClose(); // Cierra el SpeedDial después de seleccionar
    };

    const renderContent = (action) => {
        switch (action.name) {
            case 'Lenguajes':
                return (
                    <div>
                        <Typography variant='h5' className='text-center'>Lenguajes de programación</Typography>
                        <Image
                            src={javascript_image}
                            alt="Descripción de la imagen"
                            width={100}
                            height={100}
                            className='border-4 border-white shadow-2xl rounded-full cursor-pointer' 
                        />
                    </div>
                );
            case 'Web':
                return (
                    <div>
                        <Typography variant='h5' className='text-center'>Desarrollo Web</Typography>
                        <Image
                            src={java_image}
                            alt="Descripción de la imagen"
                            width={100}
                            height={100}
                            className='border-4 border-white shadow-2xl rounded-full cursor-pointer' 
                        />
                    </div>
                );
            case 'Frameworks':
                return (
                    <div>
                        <Typography variant='h5' className='text-center'>Frameworks</Typography>
                        <Image
                            src={javascript_image}
                            alt="Descripción de la imagen"
                            width={200}
                            height={200}
                            className="cursor-pointer rounded-full w-32 h-32 object-cover"
                        />
                    </div>
                );
            case 'Datos':
                return (
                    <div>
                        <Typography variant='h5' className='text-center'>Lenguajes de programación</Typography>
                        <Image
                            src={javascript_image}
                            alt="Descripción de la imagen"
                            width={200}
                            height={200}
                            className="cursor-pointer rounded-full w-32 h-32 object-cover"
                        />
                    </div>
                );
            case 'Microsoft':
                return (
                    <div>
                        <Typography variant='h5' className='text-center'>Lenguajes de programación</Typography>
                        <Image
                            src={javascript_image}
                            alt="Descripción de la imagen"
                            width={200}
                            height={200}
                            className="cursor-pointer rounded-full w-32 h-32 object-cover"
                        />
                    </div>
                );
            case 'Versiones':
                return (
                    <div>
                        <Typography variant='h5' className='text-center'>Lenguajes de programación</Typography>
                        <Image
                            src={javascript_image}
                            alt="Descripción de la imagen"
                            width={200}
                            height={200}
                            className="cursor-pointer rounded-full w-32 h-32 object-cover"
                        />
                    </div>
                );
            default:
                return <div>Selecciona una opción</div>;
        }
    };

    return (
        <Box sx={{ height: '60vh', transform: 'translateZ(0px)', flexGrow: 1, padding: 2 }}>
            <div>
                {selectedAction ? renderContent(selectedAction) : <div>Selecciona una opción</div>}
            </div>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={() => handleActionClick(action)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}