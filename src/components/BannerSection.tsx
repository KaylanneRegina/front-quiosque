
const BannerSection = () => {
    return (
        <div className='container pt-16'>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img className='hover:scale-105 transtion-transform' src="/src/assets/img/Banner.png" alt=" banner" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img className='hover:scale-105 transtion-transform' src="/src/assets/img/Banner.png" alt=" banner" />
                </div>
            </div>
        </div>
    )
}

export default BannerSection