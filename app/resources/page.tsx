'use client'
import './resources.css';
import Title from '../Title';
import Background from '../Background';


export default function Resources() {

    return (
        <>
            <Title title={'Awesome RPG project!'} />

            <main className='resources'>
                <p className='resource_item'>Resources go here</p>
            </main>
            <Background />
        </>
    )
}