import profile from "../assets/images/Batrick Reizon.jpg"

function Home() {
    return (
        <div className="flex flex-wrap gap-10 mt-10 justify-center p-5">
            <div className="text-3xl md:text-4xl flex flex-col p-5 basis-[95%] sm:basis-[80%] lg:basis-[50%] bg-gray-300 shadow-black shadow-md" style={{ width: "60%" }}>
                <div className="p-5">
                    <h1 className="m-2">Hello I'm <b style={{ fontFamily: "Inter" }}>Batrick Reizon.</b></h1>
                    <h1 className="m-2 font-bold" style={{ fontFamily: "Alfa Slab One" }}>Frontend Developer</h1>
                    <h1 className="m-2">Living in Kanyakumari</h1>
                </div>
                <div className="text-base md:text-lg px-7">
                    <p>I am dediciated and Skilled in frontend development with hands-on experience in HTML, CSS, Tailwind CSS, and JavaScript to build responsive and visually appealing user interfaces. Proficient in React.js for creating dynamic single-page applications, with working knowledge of integrating basic APIs. Comfortable using Git and GitHub for version control and collaborative development. Focused on writing clean, maintainable code and continuously improving user experience through efficient design and modern tools.</p>
                </div>
                <div className="text-2xl md:text-3xl text-black mt-5 px-5">
                    <a href="https://www.linkedin.com/in/batrick-reizon/" target="blank"><i className="fa-brands fa-square-linkedin"></i></a>
                    <a href="https://github.com/Batrick-Reizon" target="blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.instagram.com/itz.reizon_03/" target="blank"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
            <div className="hidden sm:flex sm:basis-[80%] lg:basis-[40%] justify-center items-center p-5 bg-gray-300 shadow-black shadow-md" style={{ width: "40%" }}>
                <img src={profile} alt="profile" style={{ width: "300px", height: "300px" }} className="rounded-full shadow-black shadow-lg"></img>
            </div>
        </div>
    )
}

export default Home

