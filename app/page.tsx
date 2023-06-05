'use client'
import './globals.css';
import Title from './Title';


export default function Home() {
  return (
    <>
      <Title title={'Awesome RPG project!'} />
      <div id="home">
        Info about the latest campaign, latest notes and pinned things should go here.
      </div>
    </>
  )
}