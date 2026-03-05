'use client'

import About from "../HomepageComponents/About"
import Adslanding from "../HomepageComponents/Adslanding"
import Landing from "../HomepageComponents/Landing"
import LandingProducts from "../HomepageComponents/LandingProducts"
import Policies from "../HomepageComponents/Policies"
import Textcarosal from "../HomepageComponents/Textcarosal"

export default function Homepage(){
    return(
        <div>
          <Landing/>
          <Textcarosal/>
          <LandingProducts/>
          <Adslanding/>
          <Policies/>
          <About/>
        </div>
    )
}