// components/side-bar/SideBar.jsx
import Image from "next/image";

export default function SideBar() {
  const icons = [
    "/icon-bar/Logo.png",
    "/icon-bar/Icon-1.png", // active
    "/icon-bar/Icon-2.svg",
    "/icon-bar/Icon-3.png",
    "/icon-bar/Icon-4.png",
    "/icon-bar/Icon-5.png",
    "/icon-bar/Icon-6.png",
    "/icon-bar/Icon-7.png",
  ];

  const activeIcon = "/icon-bar/Icon-1.png";

  return (
    <div className="side-bar flex flex-col justify-between">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-9 h-1">
          <Image
            src="/icon-bar/dots.png"
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
      <div className="relative w-6 h-6">
        <Image
          src="/icon-bar/Icon.svg"
          alt="back icon"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
