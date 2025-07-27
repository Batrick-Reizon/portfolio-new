function About() {
    return (
        <div className="bg-gray-300 m-1 p-10">
            <div className="text-center text-2xl md:text-3xl underline underline-offset-8" style={{ fontFamily: "Merienda" }}>
                <h1>ABOUT <b>ME</b></h1>
            </div>
            <div className="flex justify-center p-5">
                <p className="text-base md:text-lg text-center w-full">I'm Frontend Developer. I specialize in building responsive and user-friendly web interfaces using HTML, CSS, Tailwind CSS, JavaScript, and React.js. I have a basic understanding of APIs and have used them in projects to fetch and display dynamic data, such as real-time weather information using React.</p>
            </div>
            <div className="flex flex-wrap gap-5 m-5 justify-center items-center">
                <div className="p-1 w-full md:w-1/2 md:basis-[45%] text-center border-2 border-black bg-transparent rounded shadow shadow-black">
                    <h1 className="text-lg md:text-2xl font-medium">Goal</h1>
                    <p className="p-2 md:text-lg">I enjoy turning ideas into reality through code and continuously learning new technologies.</p>
                </div>
                <div className="p-1 w-full md:w-1/2 md:basis-[45%] text-center border-2 border-black bg-transparent rounded shadow shadow-black">
                    <h1 className="text-lg md:text-2xl font-medium">Tech Skills</h1>
                    <p className="p-1 md:text-lg">HTML, CSS, Tailwind CSS, JavaScript, React.js, APIs, GitHub.</p>
                </div>
            </div>
            <div className="text-center p-5 border-2 border-black shadow shadow-black rounded">
                <h1 className="text-lg md:text-2xl font-medium">Projects</h1>
                <p className="p-3 text-base md:text-xl">I have developed several frontend projects that showcase my practical skills in web development. These include Greendon and Nostra, two e-commerce websites designed with modern layouts and responsive design. I also built Actodo, a task management application that allows users to add and manage their daily tasks, and a Weather App that fetches real-time weather data using a public API. These projects reflect my ability to work with HTML, CSS, Tailwind CSS, JavaScript, and React.js to create user-friendly and dynamic web applications.
                </p>
            </div>
            <div className="p-5 border-2 border-black my-5 rounded shadow shadow-black">
                <h1 className="text-center text-xl font-medium">EDUCATION</h1>
                <div className="flex flex-wrap gap-10 justify-evenly md:justify-between text-center p-3">
                    <div className="border border-black md:basis-[40%] p-5 shadow-sm shadow-black">
                        <h2 className="text-lg font-medium">Bachelor Degree</h2>
                        <h3>St.Alphonsa College Art's And Science, Karungal</h3>
                        <h4>CGPA (7.9) July 2020 - May 2023</h4>
                    </div>
                    <div className="border border-black md:basis-[40%] p-5 shadow-sm shadow-black">
                        <h2 className="text-lg font-medium">Master Degree</h2>
                        <h3>Rohini College of Engineering and Technology, Palkulam</h3>
                        <h4>CGPA (7.5) Sept 2023 - April 2025</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About