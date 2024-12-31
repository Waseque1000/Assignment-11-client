import { useEffect } from "react";
// import Banner from "../components/Banner";
// import FAQSection from "../components/FAQSection";
import Features from "../components/Features";
// import LeaderBoard from "../components/LeaderBoard";
import HeroSection from "../components/HeroSection";
import FeaturedArtifacts from "../components/FeaturedArtifacts";
import StatisticsSection from "../components/StatisticsSection";
import ExploreSection from "../components/ExploreSection";
import HistorySection from "../components/HistorySection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="">
      <Helmet>
        <title> Artifacts</title>
      </Helmet>
      <div className="md:pt-12 pt-5">
        <HeroSection></HeroSection>
      </div>
      <div className="md:pt-16 md:pb-12 py-6">
        <Features />
      </div>
      <div className="md:pb-12 pb-6">
        <FeaturedArtifacts></FeaturedArtifacts>
      </div>
      <div className="md:pb-12 py-6">
        <StatisticsSection></StatisticsSection>
      </div>
      <div className="md:pb-12 py-6">
        <ExploreSection />
      </div>
      <div className="md:pb-12 py-6">
        <HistorySection />
      </div>
    </div>
  );
}
