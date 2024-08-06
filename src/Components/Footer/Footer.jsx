import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks=[
{
    title: "Home",
    Link: "/#,"
},
{
    title: "About",
    Link: "/#about,"
},
{
    title: "Contact",
    Link: "/#contact,"
},
{
    title: "Blog",
    Link: "/#blog,"
},
]

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* company details*/}
                <div className="py-8 px-4">
                    <a
                    href="#"
                    className="text-primary font-semibold 
                    tracking-widest text-2xl uppercase sm:text-3xl"
                    >
                        Eshop

                    </a>
                    <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
                    Lorem Ipsum has been the industry's
                    text ever since the 1500s
                    a type specimen book.
                    </p>
                    <p className="text-gray-500 mt-4">Made With &#x2764; by Raza Ul Mustafa </p>
                    <a href="#" target="_blank" 
                    className=" inline-block bg-primary/90 text-white
                    py-2 px-4 mt-4 text-sm rounded-full">
                        Raza Ul Mustafa
                    </a>
                </div>

                {/* footer links*/}
                <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
                        <ul className="space-y-3">
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.index} 
                                        className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-gray duration-300">
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* second col*/}


                    <div className="py-8 px-4">
                        <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                        <ul className="space-y-3">
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.index} 
                                        className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-gray duration-300">
                                            {data.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Address*/}
                    <div className="py-8 px-4 col-span-2
                    sm:col-auto">
                        <h1 className=" text-xl font-bold sm:text-left
                        mb-3">Address</h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <p>Raza Ul Mustafa , Karachi</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt/>
                                <p>+92 3102802864</p>
                            </div>

                            {/* social*/}
                            <div className="flex items-center gap-3 mt-6"> 
                                <a href="#">
                                    <FaInstagram className="text-3xl
                                    hover:text-primary duration-200"/>
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl
                                    hover:text-primary duration-200"/> 
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl
                                    hover:text-primary duration-200"/> 
                                </a>
                            </div>
                        </div>
                    </div>
                    

                </div>


            </div>
        </div>
    </div>
  )
}

export default Footer