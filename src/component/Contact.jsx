function Contact() {
    return (
        <div className="bg-black m-1 p-10">
            <div className="text-white text-center" style={{ fontFamily: "Monomakh" }}>
                <h1 className="underline underline-offset-8 text-2xl md:text-3xl font-black">CONTACT</h1>
                <h3 className="text-xl md:text-2xl p-5">Let's Get In Touch</h3>
            </div>
            <div className="flex flex-col gap-5 hover:outline-none hover:border-none justify-center items-center">
                <input type="text" placeholder="Enter Your Name" className="outline-none border-none p-2 w-10/12 lg:w-1/4 sm:w-1/2"></input>
                <input type="text" placeholder="Enter Your Email" className="outline-none border-none p-2 w-10/12 lg:w-1/4 sm:w-1/2"></input>
                <input type="number" placeholder="Enter Your Phone Number" className="outline-none border-none p-2 w-10/12 lg:w-1/4 sm:w-1/2"></input>
                <textarea placeholder="Message" className="outline-none border-none p-2 resize w-10/12 lg:w-1/4 sm:w-1/2"></textarea>
                <button className="text-white bg-yellow-500 p-2 w-20">Send</button>
            </div>
            <div className="text-white font-medium m-5 p-5 text-center border-2 border-white">
                <h1 className="text-xl">Follow on Social Media</h1>
                <div className="pt-5">
                    <a href="https://www.linkedin.com/in/batrick-reizon/" target="blank"><i className="fa-brands fa-square-linkedin text-3xl"></i></a>
                    <a href="https://github.com/Batrick-Reizon" target="blank"><i className="fa-brands fa-square-github text-3xl"></i></a>
                    <a href="https://www.instagram.com/itz.reizon_03/" target="blank"><i className="fa-brands fa-square-instagram text-3xl"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Contact