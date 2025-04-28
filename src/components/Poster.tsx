import comp from "/comp.png"
function Poster() {
    return (
        <section className=" bg-darker rounded-xl p-5 w-full h-full">
            <h1 className="font-extrabold text-9xl font-sans opacity-5 font-st">FOR SALE 20%</h1>
            {/* <img src="/comp.png" className="bg-transparent" alt="" />
             */}
            <div className=" flex justify-between   ">
                <div className="  flex flex-col gap-10">
                    <h1 className="text-text text-xl font-bold font-sans">THE BESTSELLER OF 2025</h1>
                    <h1 className="text-white text-6xl font-bold font-sans">
                        HP PAVILION <br /> HEWLETT-PACCARD{" "}
                    </h1>
                    <button className="bg-green-500 p-3 text-darker outline-none hover:bg-green-600 transition active:transition-none duration-100 cursor-pointer active:bg-green-900 font-bold font-sans text-2xl rounded-xl w-fit">
                        SHOP NOW
                    </button>
                </div>
                <img className="mb-0" src={comp} alt="" />
            </div>
        </section>
    )
}

export default Poster
