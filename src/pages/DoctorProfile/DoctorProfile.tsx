import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import DoctorProfileDetails from "../../components/Doctor-profile/DoctorProfileDetails";
import { doctorsData } from "../../data/doctors";

function DoctorProfile() {
  const { doctorId } = useParams();
  const doctor = doctorsData.find((item) => item.id === doctorId);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <Link
            to="/doctors"
            className="mb-5 inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-800"
          >
            ← Back to doctors
          </Link>
          <DoctorProfileDetails doctor={doctor} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DoctorProfile;
