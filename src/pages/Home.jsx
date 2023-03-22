import About from "../components/About";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center h-screen justify-center w-8/12">                
                <h2 className="text-zinc-400 text-lg">DESIGNER & WEB DEVELOPER</h2>
                <h1 className="text-zinc-100 font-semibold text-5xl">ADRIEL DUSSEX</h1>
                <Header />
            </div>
            <About />
        </div>
    )
}