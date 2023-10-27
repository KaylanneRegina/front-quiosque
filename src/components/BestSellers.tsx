
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

            <div className="grid"></div>

        </div>
    )
}

export default BestSellers