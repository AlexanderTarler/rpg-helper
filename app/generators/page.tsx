'use client'
import './generators.css';
import Title from '../Title';
import Background from '../Background';


export default function Generators() {
    return (
        <>
            <Title title={'Awesome RPG project!'} />

            <main className='generators'>
                <p className='generator_item'>Generators go here</p>
            </main>
            <Background />
        </>
    )
}