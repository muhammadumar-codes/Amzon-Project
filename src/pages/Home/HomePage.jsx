// ===*useContext*===
import { useContext } from 'react'

// ===*DataContext*===

import { DataContext } from '../../context/DataContext/DataContext'

// ===*Components*===
import Carousel from '../../components/Carousel/carousel'

// ===*Home Page*===
export default function HomePage() {
  
  // ===*Data from DataContext*===
  const { Data } = useContext(DataContext)

  return (
    <>
      <Carousel />
    </>
  )
}
