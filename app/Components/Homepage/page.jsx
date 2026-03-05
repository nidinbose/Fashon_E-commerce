'use client'

import Adslanding from "../HomepageComponents/Adslanding"
import Landing from "../HomepageComponents/Landing"
import LandingProducts from "../HomepageComponents/LandingProducts"
import Policies from "../HomepageComponents/Policies"

export default function Homepage(){
    return(
        <div>
          <Landing/>
          <LandingProducts/>
          <Adslanding/>
          <Policies/>
        </div>
    )
}