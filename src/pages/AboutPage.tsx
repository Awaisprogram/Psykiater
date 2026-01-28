import DoTogether from '../components/AboutUs/DoTogether'
import MissionStatement from '../components/AboutUs/MissionStatement'
import WhoWeAre from '../components/AboutUs/WhoWeAre'
import FAQ from '../components/AboutUs/FAQs'
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <DoTogether/>
      <MissionStatement/>
      <WhoWeAre/>
      <FAQ/>
    </div>
  )
}

export default AboutPage

