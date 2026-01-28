import BookAppointment from '../components/Contact/Appointment';
import Cards from '../components/Contact/Cards';
import BookingAndLocations from '../components/Contact/Location';
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/20 pt-24">
      <BookAppointment/>
      <Cards/>
      <BookingAndLocations/>
      
    </div>
  )
}

export default ContactPage

