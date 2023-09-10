import React from 'react'
import g1 from './g1.mp4';

export default function GoldenClub() {
  return (
    <div>
      <video src={g1} autoPlay loop muted className="golden" />
    </div>
  )
}
