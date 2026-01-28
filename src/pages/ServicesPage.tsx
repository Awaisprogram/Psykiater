import ContactBanner from '../components/Services/ContactBanner'
import OurSpecialists from '../components/Services/OurSpecialists'
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/20 pt-24">
      <OurSpecialists/>
      <ContactBanner/>
    </div>
  )
}

export default ServicesPage

