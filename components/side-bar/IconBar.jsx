// components/side-bar/IconBar.jsx
import Image from "next/image";

export default function IconBar() {
  const icons = [
    "/icon-bar/Logo.png",
    "/icon-bar/Icon-1.png", // active
    "/icon-bar/Icon-2.png",
    "/icon-bar/Icon-3.png",
    "/icon-bar/Icon-4.png",
    "/icon-bar/Icon-5.png",
    "/icon-bar/Icon-6.png",
    "/icon-bar/Icon-7.png",
  ];

  const activeIcon = "/icon-bar/Icon-1.png";

  return (
    <div className="flex flex-col justify-between bg-slate-900 dark:bg-black py-6 px-6">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative w-6 h-6">
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
              className={`cursor-pointer transition-colors p-2 rounded-lg relative w-6 h-6 ${
                isActive
                  ? "bg-slate-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-slate-700"
              }`}
            >
  <Image
    src={icon}
    alt={`icon-${index}`}
    fill
    className="object-contain"
  />
</div>
          );
        })}
      </div>
      <div className="text-white text-2xl font-bold flex flex-col items-center space-y-4 relative w-6 h-6">
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
