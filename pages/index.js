import Head from 'next/head'
import React from 'react'
import Carousel from '../components/Carousel'
import Map from '../components/Map'
import Weather from '../components/Weather'
import CardSection from '../components/CardSection'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Spotify from '../components/spotifycomponent'


export default function Home(){

  return (
    <>
      <Head>
        <title>Furhan's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Carousel></Carousel>
    <main>
        <div className="container">
            <Weather></Weather>
            <Spotify></Spotify>
            <CardSection></CardSection> 
            <Map></Map>   
            <Skills></Skills>
            <Projects></Projects>
        </div>
    </main>
    </>
  )
}


