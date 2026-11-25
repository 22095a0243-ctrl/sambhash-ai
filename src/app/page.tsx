import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedMarquee from "@/components/AnimatedMarquee";
import VoiceStudioDemo from "@/components/VoiceStudioDemo";
import ProductCapabilities from "@/components/ProductCapabilities";
import InboundReceptionist from "@/components/InboundReceptionist";
import AgentPlayground from "@/components/AgentPlayground";
import HowItWorks from "@/components/HowItWorks";
import ProductPreview from "@/components/ProductPreview";
import CallIntelligenceScrubber from "@/components/CallIntelligenceScrubber";
import CustomerSuccessShowcase from "@/components/CustomerSuccessShowcase";
import RoiCalculator from "@/components/RoiCalculator";
import UseCases from "@/components/UseCases";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import SecurityCompliance from "@/components/SecurityCompliance";
import TrustReliability from "@/components/TrustReliability";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AnimatedMarquee />
        <VoiceStudioDemo />
        <ProductCapabilities />
        <InboundReceptionist />
        <AgentPlayground />
        <HowItWorks />
        <ProductPreview />
        <CallIntelligenceScrubber />
        <CustomerSuccessShowcase />
        <RoiCalculator />
        <UseCases />
        <ComparisonMatrix />
        <Integrations />
        <Pricing />
        <SecurityCompliance />
        <TrustReliability />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}