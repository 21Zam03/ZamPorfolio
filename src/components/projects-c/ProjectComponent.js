import { Button, Typography } from "@mui/material";
import { Carousel } from "antd";
import Image from "next/image";


export default function ProjectComponent() {

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
            <div className='col-span-1 flex flex-col gap-5 p-2'>
                <div className='flex flex-col gap-2 border rounded-xl overflow-hidden shadow-sm'>
                    <Carousel autoplay>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-1.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-2.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-3.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-4.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-5.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-6.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-7.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                        <div>
                            <div style={contentStyle}>
                                <Image
                                    src="/images/projects/via-kiara/cap-8.png"
                                    alt="Descripción de la imagen"
                                    className="w-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    </Carousel>
                    <div className="flex flex-col p-5 gap-2">
                        <Typography variant='h5'>eCommerce de calzados</Typography>
                        <div className="w-1/12 h-1 bg-blue-500"></div>
                        <Typography variant='body1'>
                            Este aplicativo web está diseñado para facilitar la compra y venta de productos a través de una interfaz intuitiva y amigable.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="small" className="font-bold" onClick={() => {
                                window.open('https://github.com/21Zam03/ViaKiaraEcommerceFront', '_blank');
                            }}>Ver código</Button>
                            <Button size="small" className="font-bold" onClick={() => {
                                window.open('https://www.youtube.com/@zamcode', '_blank');
                            }}>Ver video</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}   