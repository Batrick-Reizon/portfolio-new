import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import About from "./component/About"
import Home from "./component/Home"
import Skills from "./component/Skills"
import Project from "./component/Project"
import Contact from "./component/Contact"
import { useState } from "react"

function App() {
    const [menuopen, setmenuopen] = useState(false)
    return (
        <Router>
            <div className="flex justify-between items-center p-5 border-b-black border-b-2 shadow-lg sticky top-0 z-10 bg-white">
                <div className="text-base sm:text-lg lg:text-2xl cursor-pointer" style={{ fontFamily: "Playwrite PL" }}>
                    <Link to={"/"} className=" text-black hover:bg-black hover:text-white transition duration-500 p-2 rounded-md hidden sm:flex">Batrick Reizon</Link>
                </div>
                <div className="hidden sm:flex gap-2 sm:gap-5 text-sm md:text-base lg:text-lg font-medium">
                    <Link to={"/about"} className="cursor-pointer p-2 text-black hover:bg-gray-500 hover:text-white rounded-md transition-all duration-200">About Me</Link>
                    <Link to={"/skills"} className="cursor-pointer p-2 text-black hover:bg-gray-500 hover:text-white rounded-md transition-all duration-200">Skills</Link>
                    <Link to={"/project"} className="cursor-pointer p-2 text-black hover:bg-gray-500 hover:text-white rounded-md transition-all duration-200">project</Link>
                    <Link to={"/contact"} className="cursor-pointer p-2 text-black hover:bg-gray-500 hover:text-white rounded-md transition-all duration-200">Contact Me</Link>
                </div>
                <div className="flex text-sm md:text-lg lg:text-lg items-center bg-black text-white p-2 rounded-md cursor-pointer">
                    <a href="Resume.pdf" target="blank">Reusme<i className="fa-solid fa-download"></i></a>
                </div>
                <i className="fa-solid fa-bars flex justify-center sm:hidden cursor-pointer" onClick={() => setmenuopen(true)}></i>
                {
                    <div className="p-5 flex flex-col sm:hidden fixed top-0 w-1/2 h-full bg-black text-white transition-all duration-1000 ease-in-out" style={{ right: menuopen ? "0%" : "-50%"}}>
                        <div className="text-end">
                            <i className="fa-solid fa-xmark mb-5 hover:text-red-500 cursor-pointer" onClick={() => setmenuopen(false)}></i>
                        </div>
                        <div className="flex flex-col gap-5 justify-center items-center">
                            <Link to={"/"} className="hover:underline hover:underline-offset-8" onClick={() => setmenuopen(false)}>Home</Link>
                            <Link to={"/about"} className="hover:underline hover:underline-offset-8" onClick={() => setmenuopen(false)}>About Me</Link>
                            <Link to={"/skills"} className="hover:underline hover:underline-offset-8" onClick={() => setmenuopen(false)}>Skills</Link>
                            <Link to={"/project"} className="hover:underline hover:underline-offset-8" onClick={() => setmenuopen(false)}>Project</Link>
                            <Link to={"/contact"} onClick={() => setmenuopen(false)} className="hover:underline hover:underline-offset-8">Contact</Link>
                        </div>
                    </div>
                }
            </div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/skills" element={<Skills></Skills>}></Route>
                <Route path="/project" element={<Project></Project>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </Router>
    )
}

export default App