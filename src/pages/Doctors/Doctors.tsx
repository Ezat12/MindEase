import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import DoctorsList from "../../components/Doctors-list/DoctorsList";
import { useNavigate } from "react-router-dom";
import { doctorsData } from "../../data/doctors";

function Doctors() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          <DoctorsList
            doctors={doctorsData}
            onViewProfile={(doctor) => navigate(`/doctors/${doctor.id}`)}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Doctors;
