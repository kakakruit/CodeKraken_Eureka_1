import React from 'react'
import s1 from './s1.mp4';
export default function SilverClub() {
  return (
    <div>
            <video src={s1} autoPlay loop muted className="silver" />
    </div>
  )
}
