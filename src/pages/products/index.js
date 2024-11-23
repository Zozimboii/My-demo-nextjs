import Image from "next/image"
import product1 from "../../../public/assets/images/Cat03.jpg"
import Head from "next/head"
import Link from "next/link"

export default function Product({product}) {
    console.log('- product -',product)
    return (
        <>
            <Head>
                <title>Product Page</title>
            </Head>
            <div style={{background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(225,233,148,1) 100%)"}} className="min-h-screen justify-items-center p-5">
                <p className="text-xl font-bold mb-10">Product</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
                    {product.map((item)=> (
                        <Link key={item.id} href={`/products/${item.id}`}>
                            <div className="grid justify-items-center rounded-full content-center border-2 w-full h-full p-5 bg-slate-300">
                                <div className="grid justify-items-center  w-3/4 h-full p-5">
                                {/* <div className="grid justify-items-center "> */}

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-[120px] h-[120px] mix-blend-multiply hover:scale-105"  
                                />
                                <p className="mt-3 font-semibold text-sm ">{item.title}</p>
                                <p className="text-sm text-red-800 pt-5">{item.price} $</p>
                                {/* </div> */}
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* <div className="grid justify-items-center">

                        <Image
                            src={product1}
                            alt="Product 1"
                            className="w-[200px] h-[200px]"
                        />
                        <p className="mt-3">Product 1</p>
                        <p>100.-</p>
                    </div>
                    <div className="grid justify-items-center">

                        <Image
                            src={product1}
                            alt="Product 1"
                            className="w-[200px] h-[200px]"
                        />
                        <p className="mt-3">Product 1</p>
                        <p>100.-</p>
                    </div>
                    <div className="grid justify-items-center">

                        <Image
                            src={product1}
                            alt="Product 1"
                            className="w-[200px] h-[200px]"
                        />
                        <p className="mt-3">Product 1</p>
                        <p>100.-</p>
                    </div>
                    <div className="grid justify-items-center">

                        <Image
                            src={product1}
                            alt="Product 1"
                            className="w-[200px] h-[200px]"
                        />
                        <p className="mt-3">Product 1</p>
                        <p>100.-</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const resp = await fetch(`https://fakestoreapi.com/products`)
    const product = await resp.json()

    return {
        props: {product }
    }
}