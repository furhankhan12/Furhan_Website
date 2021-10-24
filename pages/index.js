import Head from 'next/head'
import React from 'react'
import Carouselv2 from '../components/Carouselv2'
import Map from '../components/Map'
import Weather from '../components/Weather'
import CardSection from '../components/CardSection'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Spotify from '../components/spotifycomponent'
import FrequencyMap from '../components/FrequencyMap'
import NoSSR from '../components/NoSSR'

export default function Home(){

  return (
    <>
      <Head>
        <title>Furhan's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Carouselv2></Carouselv2>
    <main>
        <div className="container">
            <Weather></Weather>
            <Spotify></Spotify>
            <NoSSR>
              <FrequencyMap/>
            </NoSSR>
            <CardSection></CardSection> 
            <Map></Map>   
            <Skills></Skills>
            <Projects></Projects>
        </div>
    </main>
    </>
  )
}


