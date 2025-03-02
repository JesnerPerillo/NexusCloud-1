export default function PricingCards() {
  const plans = [
    {
      title: "BEGINNER",
      roles: ["System Administrator", "End-User Support", "IT Support Engineer"],
      price: "₱18,888",
      bgColor: "bg-black",
      buttonColor: "bg-gradient-to-r from-blue-600 to-purple-400",
      textSize: "text-5xl",
    },
    {
      title: "INTERMEDIATE",
      roles: ["Cloud Practitioner", "VMware Administrator", "Virtualization Engineer"],
      price: "₱16,888",
      color: "from-green-400 to-blue-400",
      bgColor: "bg-green-400",
      buttonColor: "bg-gradient-to-r from-green-400 to-blue-400",
      textSize: "text-5xl",
    },
    {
      title: "ADVANCED",
      roles: ["Cloud Engineer", "Solutions Architect", "Cloud Migration Engineer"],
      price: "₱30,888",
      color: "from-pink-500 to-yellow-400",
      bgColor: "bg-pink-500",
      buttonColor: "bg-gradient-to-r from-pink-500 to-yellow-400",
      textSize: "text-5xl"
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-15 p-8 con min-h-screen">
      {plans.map((plan, index) => (
        <div key={index} className="relative pb-5 card rounded-2xl shadow-xl max-w-xs">
          {/* Header */}
          <div className={`relative card text-white h-40 text-center py-6 rounded-t-2xl`}>
            <h2 className={`${plan.textSize} card-text top-[-20px] left-6 oswald-bold font-extrabold`}>{plan.title}</h2>
            {/* Role Titles */}
            <div className=" card-text font-semibold py-4">
              {plan.roles.map((role, i) => (
                <p key={i}>{role}</p>
              ))}
            </div>
          </div>

          {/* Price Badge */}
          <div className="relative flex justify-center items-center mt-6">
            <div className="bg-black text-white font-bold text-lg px-6 py-2 rounded-full">
              {plan.price}
            </div>
          </div>

          {/* Certificate List */}
          <div className="px-6 text-black">
            <p className="font-semibold card-text">This package offers the following certificates:</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2 card-text">
                ✅ VMware vSphere 7 Data Center Virtualization
              </li>
              <li className="flex items-center gap-2 card-text">
                ✅ AWS Certified Cloud Practitioner CLF-01
              </li>
              <li className="flex items-center gap-2 card-text">
                ✅ Microsoft Certified Azure Fundamentals AZ-900
              </li>
            </ul>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center mt-6">
            <button className={`text-white px-6 py-3 rounded-full font-bold ${plan.buttonColor}`}>
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
