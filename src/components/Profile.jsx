import Navbar from "./Navbar";

const Profile = () => {
  const recentActivities = [
    {
      type: "Point Exchanged",
      description: "20 points for 2 GB internet",
      date: "08 / 09 / 2024",
      points: -20,
    },
    {
      type: "Disposal",
      description: "Disposed 1.5 kg waste at drop point",
      date: "07 / 09 / 2024",
      points: 15,
    },
    {
      type: "Point Exchanged",
      description: "20 points for 2 GB internet",
      date: "08 / 09 / 2024",
      points: -20,
    },
    {
      type: "Disposal",
      description: "Disposed 1.5 kg waste at drop point",
      date: "07 / 09 / 2024",
      points: 15,
    },
    {
      type: "Point Exchanged",
      description: "20 points for 2 GB internet",
      date: "08 / 09 / 2024",
      points: -20,
    },
    {
      type: "Disposal",
      description: "Disposed 1.5 kg waste at drop point",
      date: "07 / 09 / 2024",
      points: 15,
    },
    {
      type: "Point Exchanged",
      description: "20 points for 2 GB internet",
      date: "08 / 09 / 2024",
      points: -20,
    },
    {
      type: "Disposal",
      description: "Disposed 1.5 kg waste at drop point",
      date: "07 / 09 / 2024",
      points: 15,
    },
    {
      type: "Point Exchanged",
      description: "20 points for 2 GB internet",
      date: "08 / 09 / 2024",
      points: -20,
    },
    {
      type: "Disposal",
      description: "Disposed 1.5 kg waste at drop point",
      date: "07 / 09 / 2024",
      points: 15,
    },
  ];

  return (
    <>
    <div className="max-w-sm mx-auto p-8 bg-[#F7FBEA] pb-20">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-10">
          {/* <span className="text-black">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </span> */}
          <div className="font-bold text-lg">My Profile</div>
        </div>
        <div className="size-32 bg-gray-300 rounded-full mb-3 overflow-hidden border-2 border-[#F7FBEA] ring-8 ring-[#F7FBEA] outline outline-[#5E8532] outline-2 shadow-lg drop-shadow-sm shadow-black">
          <img
            src="src\assets\profile.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#5E8532] mb-2">
          Rian Edward
        </h2>
        <p className="text-[#ABAAAA] text-xs font-bold">Level 4 Gold Member</p>
        <div className="flex w-full gap-3 items-center">
          {" "}
          <div className="w-full bg-gray-300 rounded-full h-[6px]">
            <div
              className="bg-[#5E8532] h-[6px] rounded-full"
              style={{ width: "87%" }}
            ></div>
          </div>
          <p className="text-sm text-[#616161] font-medium">87%</p>
        </div>
        <div className="flex justify-between w-full items-center mt-2 bg-[#e0f1bb] py-3 px-5 rounded-xl">
          <div className="flex items-center gap-1.5">
            <span className="text-[#5E8532]">
              <ion-icon name="call"></ion-icon>
            </span>
            <p className="text-xs text-[#455A64] font-semibold">
              +62 878 1234 1234
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#5E8532]">
              <ion-icon name="location-sharp"></ion-icon>
            </span>
            <p className="flex items-center text-xs text-gray-700">
              Lampung, Indonesia
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full mt-3 gap-1">
          <div className="text-center p-4 bg-[#e0f1bb] w-full rounded-l-3xl">
            <span className="text-[#7DB241]">
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <p className="text-sm text-[#455A64]">Rank</p>
            <p className="text-lg font-bold text-[#5E8532]">10</p>
          </div>
          <div className="text-center p-4 bg-[#e0f1bb] w-full">
            <span className="text-[#7DB241]">
              <ion-icon name="cube-outline"></ion-icon>
            </span>
            <p className="text-sm text-[#455A64]">Transactions</p>
            <p className="text-lg font-bold text-[#5E8532]">21</p>
          </div>
          <div className="text-center p-4 bg-[#e0f1bb] w-full rounded-r-3xl">
            <span className="text-[#7DB241]">
              <ion-icon name="medal-outline"></ion-icon>
            </span>
            <p className="text-sm text-[#455A64]">Points</p>
            <p className="text-lg font-bold text-[#5E8532]">521</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col p-3 rounded-lg mb-2 shadow-sm border-[1.9px] border-[#7DB241]"
          >
            <span className="flex justify-between mb-3">
              <p className="font-medium text-xs text-[#687a7f]">
                {activity.type}
              </p>
              <div className="text-xs text-white">
                <span
                  className={
                    activity.points > 0
                      ? "bg-gradient-to-r from-[#FFB956] to-[#FF914C] py-1 px-2 rounded-full"
                      : "bg-gradient-to-r from-[#9C5456] to-[#7D3336] py-1 px-2 rounded-full"
                  }
                >
                  {activity.points > 0
                    ? `+${activity.points}`
                    : activity.points}{" "}
                  points
                </span>
              </div>
            </span>
            <p className="text-base text-[#455A64] font-medium mb-1">
              {activity.description}
            </p>
            <div className="text-xs text-[#687a7f] font-medium">
              <span>{activity.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Navbar />
    </>
  );
};

export default Profile;
