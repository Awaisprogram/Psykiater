import DoTogether from '../components/AboutUs/DoTogether'
import MissionStatement from '../components/AboutUs/MissionStatement'
import WhoWeAre from '../components/AboutUs/WhoWeAre'
import FAQ from '../components/AboutUs/FAQs'
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/20 pt-24">
      <DoTogether/>
      <MissionStatement/>
      <WhoWeAre/>
      <FAQ/>
    </div>
  )
}

export default AboutPage

