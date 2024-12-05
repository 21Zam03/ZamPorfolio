import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import ResumenTab from './ResumenTab';
import SobreMiTab from './SobreMiTab';
import HabilidadesTab from './HabilidadesTab';
import ProyectoTab from './ProyectoTab';
import ExperienciaLaboral from './ExperienciaLaboralTab';
import ContactoTab from './ContactoTab';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '25px',
                p: 3,
            }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const goToAboutMe = () => {
        setValue(1)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" color="warning">
                    <Tab label="Resumen" {...a11yProps(0)}/>
                    <Tab label="Sobre mí" {...a11yProps(1)} />
                    <Tab label="Habilidades" {...a11yProps(2)} />
                    <Tab label="Proyectos" {...a11yProps(3)} />
                    <Tab label="Experiencia laboral" {...a11yProps(4)} />
                    <Tab label="Contacto" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ResumenTab goToAboutMe={goToAboutMe}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <SobreMiTab/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <HabilidadesTab/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <ProyectoTab/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <ExperienciaLaboral/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <ContactoTab/>
            </CustomTabPanel>
        </Box>
    );
}