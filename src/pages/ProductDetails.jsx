import { useLocation, useParams } from "react-router-dom";
import layer from "../assets/Layer.png";
import logo from '../assets/logo.png';


const ProductDetails = () => {
    // const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <p className="text-center text-black">Product not found or state missing.</p>;
    }

    if (!product) return <p className="text-center text-black">Product not found.</p>;

    // Group specs into two columns
    const mid = Math.ceil(product.specs.length / 2);
    const leftSpecs = product.specs.slice(0, mid);
    const rightSpecs = product.specs.slice(mid);

    return (
        <>
            <div className="relative bg-[#0F2D28] text-white h-[30vh] flex flex-col justify-center items-center overflow-hidden">
                {/* Watermark BG Image */}
                <img
                    src={layer}
                    alt="Background Layer"
                    className="absolute left-10    top-0 h-full opacity-40 z-0"
                />

                {/* Content */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <img src={logo} alt="Contact Icon" className="w-6 h-6 object-contain opacity-50" />
                    <p className="text-lg font-medium text-white/50">Product </p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    {product.title}
                </h2>
            </div>
            <div className="max-w-8xl mx-auto px-4 py-16 text-black">
                <img src={product.img} alt="Product" className="w-full h-[400px] object-cover mb-10 " />

                <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
                <p className="mb-8 text-black/50 text-lg">{product.desc}</p>

                <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {[leftSpecs, rightSpecs].map((specGroup, columnIndex) => (
                        <div key={columnIndex}>
                            {specGroup.map((spec, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between border-b border-black py-2"
                                >
                                    <span className="text-black">{spec.label}:</span>
                                    <span className="font-medium">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <p className="text-base text-black whitespace-pre-line leading-relaxed">
                    {product.description}
                </p>
            </div>
        </>
    );
};

export default ProductDetails;
