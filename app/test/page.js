import React from 'react'
import dynamic from 'next/dynamic'
 
const FabricFloorMap = dynamic(() => import('../components/floorMap'), {
  ssr: false,
})

export default function Page() {
  return (
    <div>
        <FabricFloorMap />
    </div>
  )
}
