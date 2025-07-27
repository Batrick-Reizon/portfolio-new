import Html from "../assets/images/HTML.jpg"
import Css from "../assets/images/CSS.png"
import Tailwind from "../assets/images/Tailwindcss.jpg"
import Javascript from "../assets/images/Javascript.png"
import RaectJS from "../assets/images/ReactJS.png"
import GitHub from "../assets/images/GitHub.png"

function Skills() {
    return (
        <div className="flex justify-center m-4">
            <div className="bg-black p-10">
                <h1 className="text-center underline underline-offset-8 decoration-white text-2xl md:text-3xl text-white pb-10">MY <b>SKILLS</b></h1>
                <div className="flex flex-wrap justify-center sm:justify-around p-5 gap-5 lg:gap-10">
                    <div className="border-2 shadow-md shadow-white rounded-lg border-white bg-slate-500 p-5 text-center basis-[80%] sm:basis-[40%] lg:basis-[25%] flex flex-col items-center">
                        <img src={Html} alt="HTML" style={{ width: "100px", height: "100px" }}></img>
                        <p className="p-2 text-white md:text-xl font-medium">HTML</p>
                    </div>
                    <div className="border-2 shadow-md shadow-white rounded-lg border-white bg-slate-500 p-5 text-center basis-[80%] sm:basis-[40%] lg:basis-[25%] flex flex-col items-center">
                        <img src={Css} alt="CSS" style={{ width: "100px", height: "100px" }}></img>
                        <p className="p-2 text-white md:text-xl font-medium">CSS</p>
                    </div>
                    <div className="border-2 shadow-md shadow-white rounded-lg border-white bg-slate-500 p-5 text-center basis-[80%] sm:basis-[40%] lg:basis-[25%] flex flex-col items-center">
                        <img src={Tailwind} alt="Tailwind" style={{ width: "100px", height: "100px" }}></img>
                        <p className="p-2 text-white md:text-xl font-medium">Tailwind CSS</p>
                    </div>
                    <div className="border-2 shadow-md shadow-white rounded-lg border-white bg-slate-500 p-5 text-center basis-[80%] sm:basis-[40%] lg:basis-[25%] flex flex-col items-center">
                        <img src={Javascript} alt="Javascript" style={{ width: "100px", height: "100px" }}></img>
                        <p className="p-2 text-white md:text-xl font-medium">Javascript</p>
                    </div>
                    <div className="border-2 shadow-md shadow-white rounded-lg border-white bg-slate-500 p-5 text-center basis-[80%] sm:basis-[40%] lg:basis-[25%] flex flex-col items-center">
                        <img src={RaectJS} alt="CSS" style={{ width: "100px", height: "100px" }}></img>
                        <p className="p-2 text-white md:text-xl font-medium">Reactjs</p>
                    </div>
                    <div className="border-2 shadow-md shadow-white rounded-lg border-white bg-slate-500 p-5 text-center basis-[80%] sm:basis-[40%] lg:basis-[25%] flex flex-col items-center">
                        <img src={GitHub} alt="CSS" style={{ width: "100px", height: "100px" }}></img>
                        <p className="p-2 text-white md:text-xl font-medium">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills