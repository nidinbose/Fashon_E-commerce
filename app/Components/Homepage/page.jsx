'use client'

import About from "../HomepageComponents/About"
import Ads1 from "../HomepageComponents/Ads1"
import Adslanding from "../HomepageComponents/Adslanding"
import Landing from "../HomepageComponents/Landing"
import LandingProducts from "../HomepageComponents/LandingProducts"
import LimitedStock from "../HomepageComponents/LimitedStock"
import MostFavourite from "../HomepageComponents/MostFavourite"
import Policies from "../HomepageComponents/Policies"
import Ratings from "../HomepageComponents/Ratings"
import Textcarosal from "../HomepageComponents/Textcarosal"
import Loading from "../Naviagation/Loading"

export default function Homepage(){
    return(
        <div>
          <Landing/>
          <Textcarosal/>
          <LandingProducts/>
          <Adslanding/>
          <Policies/>
          <Ads1/>
          <MostFavourite/>
          <About/>
           <LimitedStock/>
           <Ratings/>
           <Loading/>
          
        </div>
    )
}