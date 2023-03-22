import { Link as LinkRouter } from 'react-router-dom'

export default function Header() {
    const nav = [
        {
            texto: 'Sobre mí',
            link: '/',
        },
        {
            texto: 'Habilidades',
            link: '/',
        },
        {
            texto: 'Proyectos',
            link: '/',
        },
        {
            texto: 'Contacto',
            link: '/',
        },
    ]

    const navItem = (link) => (
        <LinkRouter to={link.link} className='text-zinc-400 font-light py-2 px-4 border border-zinc-400 rounded-3xl'>{link.texto}</LinkRouter>
    )

    return (
        <div className='flex gap-4 mt-2'>
            {nav.map(navItem)}
        </div>
    )
}