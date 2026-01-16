import "./App.css";
import ProfilePage from "./components/profileP.jsx";
import avatarImage from "./assets/avatarImage.jpg";

function App() {

  const user = {
    name: "Fereshteh Azizi",
    username: "@ferra_azizi",
    avatarImage: avatarImage,
    xp: 70,
    lastActive: "Jan 9, 2026",
    streakDays: 2,
    longestStreak: 5,
    recentBadgeText: "No badges yet.",

    personalInfo: {
      Email: "fereshtehazizi710@gmail.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province or State": "Herat",
      "Date of Birth": "1/5/2009",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "N/A",
      Languages: "Farsi, English",
      Bio: "Student at @codetoinspire"
    },

    accountDetails: {
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    },
  };


  return (
    <div className="page">
      <ProfilePage user={user} />
    </div>
  );
}

export default App
