import HeroSection from '../components/Home/Hero'
import InfoHighlight from '../components/Home/InfoHighlight'
import MostReadArticles from '../components/Home/MostReadArticles'

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <Marquee /> */}
      <InfoHighlight />
      <MostReadArticles />
    </>
  )
}

export default HomePage

