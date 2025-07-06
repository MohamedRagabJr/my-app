import productData from "../productdata";

export default function Product() {
    return (
        <div className="flex justify-center mt-3">
            {productData.map((product) => (
                <div className="card mx-9 border p-3 rounded-2xl" key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                </div>
            ))}
        </div>
    );
}