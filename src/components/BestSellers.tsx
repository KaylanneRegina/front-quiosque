import Cerveja from "C:/Users/kayla/OneDrive/Documentos//FRONT/front-quiosque/src/assets/img/skol.png";
import ProductCard from "./ProductCard";

const data = [
    { id: 0, img: "/src/assets/img/skol.png", name: "Skol", price: "5,00"},
    { id: 1, img: "/src/assets/img/stella.png", name: "stella", price: "7,00"},
    { id: 2, img: "/src/assets/img/itaipava.png", name: "itaipava", price: "4,00"},
    { id: 3, img: "/src/assets/img/carne.png", name: "carne", price: "10,00"},
];

const BestSellers = () => {
    return (
        <div className="container pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Mais Vendidos</h3>
                    <p className="text-gray-600 mt-2">Os melhor sabor e o melhor preço da região!</p>
                </div>

                <div className="space-x-4 mt-8 lg:mt-0">
                    <button className="feature_btn">Petiscos</button>
                    <button className="text-gray-600 hover:text-accent">Cervejas</button>
                    <button className="text-gray-600 hover:text-accent">Não Alcoólicas</button>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover" src={Cerveja} alt="banner" />
                </div>

                {data.map((el) => (
                    <ProductCard
                        key={el.id}
                        img={el.img}
                        name={el.name}
                        price={el.price}
                    />

                ))};

            </div>

        </div>
    )
}

export default BestSellers