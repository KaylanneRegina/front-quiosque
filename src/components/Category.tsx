import Cerveja from "C:/Users/kayla/OneDrive/Documentos//FRONT/front-quiosque/src/assets/img/skol.png";
import Petisco from "C:/Users/kayla/OneDrive/Documentos//FRONT/front-quiosque/src/assets/img/carne.png";
import Balde from "C:/Users/kayla/OneDrive/Documentos//FRONT/front-quiosque/src/assets/img/heineken.png";
import Refri from "C:/Users/kayla/OneDrive/Documentos//FRONT/front-quiosque/src/assets/img/Refrigerentes.jpg.webp"
import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Cervejas",
        count: "10 Produtos",
        img: Cerveja,
    },
    {
        id: 1,
        name: "Petiscos",
        count: "5 Produtos",
        img: Petisco,
    },
    {
        id: 2,
        name: "Baldes",
        count: "7 Produtos",
        img: Balde,
    },
    {
        id: 3,
        name: "Refrigerantes",
        count: "4 Produtos",
        img: Refri,
    }
];

const Category = () => {
    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((el) => (
                    <CategoryCard
                        key={el.id}
                        img={el.img}
                        name={el.name}
                        count={el.count}
                    />
                ))}
            </div>
        </div>

    );
};

export default Category;