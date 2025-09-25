// components/side-bar/SideBar.jsx
import Image from "next/image";

export default function SideBar() {
  const icons = [
    "/sideBar-icons/Logo.png",
    "/sideBar-icons/Icon-1.png", // active
    "/sideBar-icons/Icon-2.svg",
    "/sideBar-icons/Icon-3.png",
    "/sideBar-icons/Icon-4.png",
    "/sideBar-icons/Icon-5.png",
    "/sideBar-icons/Icon-6.png",
    "/sideBar-icons/Icon-7.png",
  ];

  const activeIcon = "/sideBar-icons/Icon-1.png";

  return (
    <div className="side-bar flex flex-col justify-between h-full">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-9 h-1">
          <Image
            src="/sideBar-icons/dots.png"
            alt="back icon"
            fill
            className="object-contain"
          />
        </div>
        {icons.map((icon, index) => {
          const isActive = icon === activeIcon;
          return (
            <div
              key={index}
              className={`cursor-pointer transition-colors rounded-full relative w-12 h-12 flex justify-center items-center ${
                isActive ? "bg-[#ffffff1a] text-[#ffffff]" : "text-[#e1e1e180]"
              }`}
            >
              <Image
                src={icon}
                alt={`icon-${index}`}
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="relative flex w-6 h-6">
        <Image
          src="/sideBar-icons/Icon.svg"
          alt="back icon"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
