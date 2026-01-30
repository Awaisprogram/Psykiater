import ContactBanner from '../components/Services/ContactBanner'
import OurSpecialists from '../components/Services/OurSpecialists'
import TreatmentsSection from '../components/Services/Treatments'
const ServicesPage = () => {
  return (
    <div className="min-h-screen  bg-white pt-24">
      <TreatmentsSection/>
      <OurSpecialists/>
      <ContactBanner/>
    </div>
  )
}

export default ServicesPage

