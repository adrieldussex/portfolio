import React, { useState, useEffect } from 'react'
import {Link as LinkRouter} from 'react-router-dom' 

export default function Projects() {
    const rango = 3
    const slides = (3 * rango)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + rango)
    const [intervalId, setIntervalId] = useState()
    const tiempo = 10 * 1000
    const data = [
        {
            nombre: '1',
        },
        {
            nombre: '2',
        },
        {
            nombre: '3',
        },
        {
            nombre: '4',
        },
        {
            nombre: '5',
        },
        {
            nombre: '6',
        },
        {
            nombre: '7',
        },
        {
            nombre: '8',
        },
        {
            nombre: '9',
        },
    ]

    const proyectos = (proyecto) => (
        <div className='bg-neutral-500 w-80 h-96 overflow-hidden p-4 shadow-lg transition-all hover:-translate-y-2'>
            <p>Proyecto {proyecto.nombre}</p>
        </div>
    )

    useEffect( () => {
        let id = setInterval(function () {
            siguiente()
        }, tiempo)
        setIntervalId(id)

        return () => clearInterval(id)
    }, [start])

    function atras() {
        if (start >= rango) {
            setStart( start - rango )
            setEnd( end - rango )
        } else {
            setStart( slides - rango )
            setEnd(slides)
        }
        clearInterval(intervalId)
    }

    function siguiente() {
        if (start < slides - rango) {
            setStart( start + rango )
            setEnd( end + rango )
        } else {
            setStart(0)
            setEnd(rango)
        }
        clearInterval(intervalId)
    }

    return (
    <div className='h-screen flex flex-col justify-evenly items-center w-3/4 text-center'>
        <div className='text-zinc-200 w-1/4'>
            <h2 className='text-4xl font-semibold'>PROYECTOS</h2>
            <p className=''>Conocé todos mis proyectos</p>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <button onClick={atras} className='text-zinc-100'>{'<'}</button>
            <div className='flex gap-6'>
                { data?.slice(start, end).map(proyectos)}
            </div>
            <button onClick={siguiente} className='text-zinc-100'>{'>'}</button>
        </div>
    </div>
    )
}