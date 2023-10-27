import { BsArrowRight } from "react-icons/bs";
import Banner from "C:/Users/kayla/OneDrive/Documentos//Front-EndQuiosque/front-quiosque/src/assets/img/Banner.png";
import Banner2 from "C:/Users/kayla/OneDrive/Documentos//Front-EndQuiosque/front-quiosque/src/assets/img/Banner2.png";
import Banner3 from "C:/Users/kayla/OneDrive/Documentos//Front-EndQuiosque/front-quiosque/src/assets/img/Banner3.png";


const Hero = () => {
    return (
        <div className="container">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
                <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
                    <img className="w-full h-full object-cover rounded-lg" src={Banner} alt="Stella imagem"/>

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
                        <p className="text-2xl hidden sm:block text-white">Cerveja Bealga com 600 anos de tradição!</p>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white" >Stella Artois </h2>
                        <p className="text-white text-xl pt-4 sm:pt-8">Promoção</p>
                        <div className="font-medium text-white text-2xl sm:text-6xl pb-4 sm:pb-8">R$30</div>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:py-3 font-bold cursor-pointer">
                            Comprar <BsArrowRight />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg" 
                    src={Banner2}
                    alt="Petisco imagem"
                    />

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white" >Petiscos </h2>
                        <p className="text-white text-xl pt-4">Apartir de</p>
                        <div className="font-medium text-white text-2xl sm:text-4xl pb-8">R$10</div>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] font-bold cursor-pointer">
                            Comprar <BsArrowRight />
                        </div>
                    </div>

                </div>

                <div className="relative">
                    <img className="h-full w-full object-cover rounded-lg" 
                    src={Banner3}
                    alt="Hei imagem"
                    />

                    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white" >Heineken </h2>
                        <p className="text-white text-xl pt-4">LongNeck</p>
                        <div className="font-medium text-white text-2xl sm:text-4xl pb-8">R$7</div>
                        <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] font-bold cursor-pointer">
                            Comprar <BsArrowRight />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero