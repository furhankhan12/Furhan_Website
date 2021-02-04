import Carousel from "../components/Carousel";

import { connectToDatabase } from '../util/mongodb'

export default function Database({isConnected}){
    return(
        <>
        <Carousel></Carousel>

        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}
        </>
    )
}

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase()
  
    const isConnected = await client.isConnected()
  
    return {
      props: { isConnected },
    }
  }