import React from 'react'
import { Header, HouseOverView, HouseSorting } from '../components'

const Home = () => {
    return (
        <div>
            <Header />
            <HouseSorting />
            <HouseOverView />
        </div>
    )
}

export default Home