import { Button, TextField, Typography } from "@mui/material";

export default function ContactoTab() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-6 w-full">
            <div className='flex flex-col gap-5 px-5 py-14 w-2/3 border rounded-xl'>
                <div className='flex flex-col w-full justify gap-5'>
                    <Typography variant='h3' className='text-center'>
                        Contacto
                    </Typography>
                    <Typography variant='body1' className="text-center">
                        Puedes conectarte conmigo completando el formulario de abajo. Estoy abierto a oportunidades laborales, colaboraciones en proyectos y cualquier consulta relacionada con mis servicios. No dudes en enviarme un mensaje no te arrepentiras; estaré encantado de responderte y explorar cómo podemos trabajar juntos.
                    </Typography>
                </div>
                <div className='flex justify-center items-center h-full p-5 gap-20'>
                    <div className="flex flex-col border w-full p-10 gap-5">
                        <div className="flex flex-col justify-center items-center gap-5">
                            <div className="flex flex-col w-1/2 gap-3">
                                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                                <TextField id="outlined-basic" label="Correo" variant="outlined" type="email" />
                                <TextField id="outlined-basic" label="Mensaje" variant="outlined" multiline rows={4} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Button variant="contained">ENVIAR</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}