import Header from "../components/Header";

export default function Home() {
    return (
        <div className="w-8/12 mx-auto h-screen flex flex-col justify-center items-center">
            <h2 className="text-zinc-400 text-lg">DESIGNER & WEB DEVELOPER</h2>
            <h1 className="text-zinc-100 font-semibold text-5xl">ADRIEL DUSSEX</h1>
            <Header />
        </div>
    )
}