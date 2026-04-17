import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import DoctorsList, {
  type Doctor,
} from "../../components/Doctors-list/DoctorsList";

function Doctors() {
  const doctors: Doctor[] = [
    {
      id: "doctor-1",
      name: "Ahmed Hassan",
      title: "Autism Specialist",
      about:
        "Experienced specialist in autism support plans, behavior improvement, and family guidance.",
      imageUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      ratingCount: 128,
      location: "Cairo, Egypt",
      languages: ["Arabic", "English"],
      nextAvailable: "Today 7:00 PM",
      priceEGP: 350,
      tags: ["Autism", "Behavior", "Kids"],
      verified: true,
    },
    {
      id: "doctor-2",
      name: "Mona Adel",
      title: "Speech Therapist",
      about:
        "Focused on speech delay and communication skills with customized practical sessions.",
      imageUrl:
        "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      ratingCount: 94,
      location: "Alexandria, Egypt",
      languages: ["Arabic"],
      nextAvailable: "Tomorrow 5:30 PM",
      priceEGP: 300,
      tags: ["Speech", "Communication", "Children"],
      verified: true,
    },
    {
      id: "doctor-3",
      name: "Youssef Samir",
      title: "Child Psychiatrist",
      about:
        "Supports children with anxiety, focus issues, and emotional regulation with evidence-based care.",
      imageUrl:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      ratingCount: 76,
      location: "Online",
      languages: ["Arabic", "English"],
      nextAvailable: "Thu 8:00 PM",
      priceEGP: 450,
      tags: ["Anxiety", "ADHD", "Parenting"],
      verified: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          <DoctorsList doctors={doctors} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Doctors;
