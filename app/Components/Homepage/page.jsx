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
import Shop from "../HomepageComponents/Shop"
import Textcarosal from "../HomepageComponents/Textcarosal"
export default function Homepage(){
    return(
        <div className="overflow-x-hidden">
          <Landing/>
          <Textcarosal/>
          <LandingProducts/>
          <Adslanding/>
          <Policies/>
          <Ads1/>
          <MostFavourite/>
           <Shop/>
          <About/>
           <LimitedStock/>
           <Ratings/>
          
          
        </div>
    )
}