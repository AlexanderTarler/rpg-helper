'use client'
import './campaigns.css';
import Title from '../Title';
import Background from '../Background';


export default function Campaigns() {

    return (
        <>
            <Title title={'Awesome RPG project!'} />

            <main className='campaigns'>
                <p className='campaign_item'>Campaigns go here</p>
            </main>
            <Background />
        </>
    )
}