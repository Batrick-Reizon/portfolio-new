import Reestar from "../assets/images/Reestar.png"
import Udemy from "../assets/images/Udemy.png"
import Greenden from "../assets/images/Greenden.png"
import Nostra from "../assets/images/Nostra.png"
import Actodo from "../assets/images/Actodo.png"
import Weather from "../assets/images/Weather.png"

function Project() {
    return (
        <div>
            <div className="text-center p-5">
                <h1 className="text-3xl font-black underline underline-offset-8" style={{ fontFamily: "B612" }}>PROJECTS</h1>
            </div>
            <div className="flex flex-wrap gap-10 justify-around p-5">
                <div className="relative bg-black rounded-md w-4/5 sm:w-2/5 lg:w-1/4">
                    <img src={Reestar} style={{ width: "100%", height: "200px" }} className="rounded-md opacity-50" alt="Reestar"></img>
                    <a href="https://batrick-reizon.github.io/reestar-food-order-website/" target="blank" className="absolute top-[45%] left-[42%] text-white font-medium bg-black p-1 rounded-md">Explore</a>
                </div>
                <div className="relative bg-black rounded-md w-4/5 sm:w-2/5 lg:w-1/4">
                    <img src={Udemy} style={{ width: "100%", height: "200px" }} className="rounded-md opacity-50" alt="Udemy"></img>
                    <a href="https://batrick-reizon.github.io/udemy-website/" target="blank" className="absolute top-[45%] left-[42%] text-white font-medium bg-black p-1 rounded-md">Explore</a>
                </div>
                <div className="relative bg-black rounded-md w-4/5 sm:w-2/5 lg:w-1/4">
                    <img src={Greenden} style={{ width: "100%", height: "200px" }} className="rounded-md opacity-50" alt="Greenden"></img>
                    <a href="https://batrick-reizon.github.io/greenden-tailwind/" target="blank" className="absolute top-[45%] left-[42%] text-white font-medium bg-black p-1 rounded-md">Explore</a>
                </div>
                <div className="relative bg-black rounded-md w-4/5 sm:w-2/5 lg:w-1/4">
                    <img src={Nostra} style={{ width: "100%", height: "200px" }} className="rounded-md opacity-50" alt="Nostra"></img>
                    <a href="https://batrick-reizon.github.io/nostra-e-commerce-website/" target="blank" className="absolute top-[45%] left-[42%] text-white font-medium bg-black p-1 rounded-md">Explore</a>
                </div>
                <div className="relative bg-black rounded-md w-4/5 sm:w-2/5 lg:w-1/4">
                    <img src={Actodo} style={{ width: "100%", height: "200px" }} className="rounded-md opacity-50" alt="Actodo"></img>
                    <a href="https://actodo-react-sandy.vercel.app/" target="blank" className="absolute top-[45%] left-[42%] text-white font-medium bg-black p-1 rounded-md">Explore</a>
                </div>
                <div className="relative bg-black rounded-md w-4/5 sm:w-2/5 lg:w-1/4">
                    <img src={Weather} style={{ width: "100%", height: "200px" }} className="rounded-md opacity-50" alt="Weather"></img>
                    <a href="https://weather-app-iota-eight-76.vercel.app/" target="blank" className="absolute top-[45%] left-[42%] text-white font-medium bg-black p-1 rounded-md">Explore</a>
                </div>
            </div>
        </div>
    )
}

export default Project