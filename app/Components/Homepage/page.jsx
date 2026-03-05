'use client'

import Adslanding from "../HomepageComponents/Adslanding"
import Landing from "../HomepageComponents/Landing"
import LandingProducts from "../HomepageComponents/LandingProducts"

export default function Homepage(){
    return(
        <div>
          <Landing/>
          <LandingProducts/>
          <Adslanding/>
        </div>
    )
}