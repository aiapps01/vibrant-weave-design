
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import InstagramBanner from "@/components/InstagramBanner";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Helmet>
        <title>MeowCare - Gentle, expert care for your feline friend</title>
        <meta name="description" content="Providing gentle, expert care for your feline friend. Trusted by 13K+ cat owners with 5-star ratings across platforms." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <Hero />
          
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SocialProof />
          </motion.div>
          
          <InstagramBanner />
        </main>
      </div>
    </>
  );
};

export default Index;
