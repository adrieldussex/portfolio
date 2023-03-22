export default function Skills() {
    const skills = [
        {
            icono: '',
            nombre: 'Node JS'
        },
        {
            icono: '',
            nombre: 'JavaScript'
        },
        {
            icono: '',
            nombre: 'React JS'
        },
        {
            icono: '',
            nombre: 'Mongo DB'
        },
        {
            icono: '',
            nombre: 'Next JS'
        },
        {
            icono: '',
            nombre: 'Express'
        },
    ]

    const habilidades = (habilidad) => (
        <div className="flex flex-col gap-2 justify-center items-center bg-neutral-800 h-56 w-48 rounded-3xl shadow-lg">
            <div className="bg-neutral-700 h-1/2 w-1/2"></div>
            <p className="font-medium text-lg text-neutral-500">{habilidad.nombre}</p>
        </div>
    )

    return (
        <div className="h-screen w-full flex justify-center items-center bg-neutral-900">
            <div className="h-5/6 w-1/2 bg-neutral-800 flex justify-end items-center text-zinc-100">
                <div className="h-3/4 w-3/4 text-4xl font-semibold flex flex-col justify-center">
                    <h2 className="text-rose-600">Habilidades</h2>
                    <ul className="mt-6 text-xl font-normal flex flex-col gap-2">
                        <li>Illustrator</li>
                        <div className="w-3/5 bg-cyan-400 h-2 mb-4 rounded-md" />
                        <li>Photoshop</li>
                        <div className="w-3/5 bg-cyan-400 h-2 mb-4 rounded-md" />
                        <li>Figma</li>
                        <div className="w-2/5 bg-cyan-400 h-2 mb-4 rounded-md" />
                    </ul>
                    <h2 className="text-rose-600 mt-4">Habilidades Blandas</h2>
                    <ul className="mt-6 text-xl font-normal">
                        <li>Liderazgo</li>
                        <li>Comunicación activa</li>
                        <li>Trabajo en equipo</li>
                        <li>Empatía</li>
                    </ul>
                </div>
            </div>
            <div className="h-5/6 w-1/2 flex flex-wrap justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {skills.map(habilidades)}
                </div>
            </div>
        </div>
    )
}