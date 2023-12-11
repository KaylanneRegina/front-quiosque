import BlogCard from "./BlogCard";

const data = [
    {
        img: "/src/assets/img/skol.png",
        // img: {Petisco},
        title: "skol",
        date: "Agosto 28, 2023",
        comment: 1,
    },
    {
        img: "/src/assets/img/skol.png",
        // img: {Balde},
        title: "skol",
        date: "Agosto 28, 2023",
        comment: 8,
    },
    {
        img: "/src/assets/img/skol.png",
        // img: {Refri},
        title: "skol",
        date: "Agosto 28, 2023",
        comment: 6,
    }
];

const BlogSection = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Noticias</h2>
            <p className="text-gray-500">asdasdasdasd</p>
            <div className="grid sm:grid-cols-3 gap-8 pt-8">
                {data.map((el) => (
                    <BlogCard
                        key={el.date}
                        img={el.img}
                        title={el.title}
                        date={el.date}
                        comment={el.comment}
                    />
                ))};
            </div>
        </div>
    )
}

export default BlogSection