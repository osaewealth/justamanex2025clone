import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Herobg from "../Images/herobg.jpg";
import Perfume from "../Images/bodypic1.jpg";
import Spray from "../Images/bodypic2.jpg";
import Container from "../Images/bottle1.png";
import Container1 from "../Images/bottle2.png";
import Container2 from "../Images/bottle3.png";
import Container3 from "../Images/bottle4.png";

export default function Home() {

    return (
        <>
            <Navbar />
            <section
                className=" relative bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${Herobg})` }}>
                <div className="flex items-center h-full pl-16">
                    <div>
                        <p className="text-7xl text-[#002554] font-bold leading-tight">
                            WE ARE <br /> AMANEX
                        </p>
                        <button className=" flex gap-6 mt-8 px-10 py-6 bg-[#002554] text-white text-md font-semibold rounded-br-4xl hover:bg-transparent hover:text-[#002554] border border-[#002554] transition">
                            WHO WE ARE
                            <ArrowUpRight className="text-3xl" />
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="bg-white py-20 px-4">
                <div className="w-[90%] max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-widest text-[#002554] font-semibold mb-3">
                            Our Brands
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                            Products that Make Life a Little Easier
                        </h2>
                    </div>

                    {/* Brand Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-100 shadow p-4 flex flex-col items-center text-center hover:shadow-md transition">
                            <img src={Container} alt="Amanex Cleaning Products" className="mb-4" />
                            <p className="text-sm font-medium text-gray-700">Amanex Cleaning Products</p>
                        </div>
                        <div className="bg-gray-100 shadow p-4 flex flex-col items-center text-center hover:shadow-md transition">
                            <img src={Container1} alt="Amanex Air & Scent" className="mb-4" />
                            <p className="text-sm font-medium text-gray-700">Amanex Air & Scent</p>
                        </div>
                        <div className="bg-gray-100 shadow p-4 flex flex-col items-center text-center hover:shadow-md transition">
                            <img src={Container2} alt="Amanex Personal & Hand Care" className="mb-4" />
                            <p className="text-sm font-medium text-gray-700">Amanex Personal & Hand Care</p>
                        </div>
                        <div className="bg-gray-100 shadow p-4 flex flex-col items-center text-center hover:shadow-md transition">
                            <img src={Container3} alt="Amanex Plastics & Packaging" className="mb-4" />
                            <p className="text-sm font-medium text-gray-700">Amanex Plastics & Packaging</p>
                        </div>
                        <div className="bg-gray-100 shadow p-4 flex flex-col items-center text-center hover:shadow-md transition">
                            <img src={Container} alt="Amanex Fragrances & Personal Care" className="mb-4" />
                            <p className="text-sm font-medium text-gray-700">Amanex Fragrances & Personal Care</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="bg-yellow-100 py-16 px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto">

                    {/* Image */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src={Perfume} alt="Image" className="w-full h-[300px] md:h-[400px]  rounded-xl shadow-lg" />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
                        <h2 className="text-4xl font-bold text-[#002554] mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-800 ">
                            Continuous quality improvement, employment creation,<br />
                            and sustainable growth in the manufacturing sector.
                        </p>
                        <button className="w-fit flex items-center gap-4 mt-8 px-8 py-4 bg-[#002554] text-white text-md font-semibold rounded-br-3xl hover:bg-transparent hover:text-[#002554] border border-[#002554] transition-colors duration-300">
                            Learn More
                            <ArrowUpRight className="text-2xl" />
                        </button>
                    </div>

                </div>
            </section>


            {/* SECTION 4 */}
            <section className="bg-yellow-100 py-16 px-4">
                <div className="flex flex-col-reverse md:flex-row items-center md:items-start max-w-7xl mx-auto">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
                        <h2 className="text-4xl font-bold text-[#002554] mb-6">Our Vision</h2>
                        <p className="text-lg text-gray-800">
                            To become one of Africa's leading household,<br />
                            cosmetics, and plastic manufacturers.
                        </p>
                        <button className="w-fit flex items-center gap-4 mt-8 px-8 py-4 bg-[#002554] text-white text-md font-semibold rounded-br-3xl hover:bg-transparent hover:text-[#002554] border border-[#002554] transition-colors duration-300">
                            Learn More
                            <ArrowUpRight className="text-2xl" />
                        </button>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <img src={Spray} alt="Image" className="w-full h-[300px] md:h-[400px]  rounded-xl shadow-lg" />
                    </div>

                </div>
            </section>


            <Footer />

        </>
    );
}