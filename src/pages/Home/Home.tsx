import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import WelcomeSection from "../../components/Welcome-Section/WelcomeSection";
import MoodSelection from "../../components/Mood-Selection/MoodSelection";
import Tools from "../../components/Personalized-Tools/Tools";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <WelcomeSection name="Ezat" />
        <MoodSelection />
        <Tools />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
