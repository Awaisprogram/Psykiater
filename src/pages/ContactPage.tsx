import BookAppointment from '../components/Contact/Appointment';
import Cards from '../components/Contact/Cards';
import BookingAndLocations from '../components/Contact/Location';
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <BookAppointment/>
      <Cards/>
      <BookingAndLocations/>
      
    </div>
  )
}

export default ContactPage

