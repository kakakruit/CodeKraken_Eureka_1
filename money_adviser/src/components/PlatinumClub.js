import React from 'react'
import p1 from './p1.mp4';
export default function PlatinumClub() {
  return (
    <div>
            <video src={p1} autoPlay loop muted className="platinum" />
            
    </div>
  )
}
