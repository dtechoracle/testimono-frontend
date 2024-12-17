import React from 'react'
import HeroSection from './components/HeroSection'
import StrategyCard from "./components/StrategyCard";
import Database from './components/Icons/Database'
import Network from './components/Icons/Network'
import Wallet from './components/Icons/Wallet'
import { Testimonials } from './components/Testimonal';
import { CallToAction } from './components/CallToAction';

const Layout = () => {
  return (
    <div>
      <HeroSection />
       <div className=" bg-white pt-10 px-10 text-black">
       <div className="grid md:grid-cols-3   w-full py-5  place-items-center place-content-center container gap-3">

        <StrategyCard
          title="Connect with Ease"
          icon={<Network />}
          description="QGather powerful testimonials effortlessly with a streamlined, user-friendly form designed to save you time and delight your audience."
        />
        <StrategyCard
          title="Seamless Integration"
          icon={<Database/>}
          description="Embed testimonials anywhere on your website using our flexible iframe code—no coding skills required. It’s smooth, fast, and looks perfect on any platform."
        />
        <StrategyCard
          title="Actionable Insights"
          icon={<Wallet />}
          description="Go beyond the surface. Track the performance of your testimonials with real-time analytics, helping you optimize for even greater impact"
        />
      </div>
      </div>
      
      <Testimonials />
      <CallToAction />

   </div>
  )
}

export default Layout