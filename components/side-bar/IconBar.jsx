// components/IconBar.js
import { FiGrid, FiUsers, FiMessageSquare, FiSettings, FiBriefcase, FiFolder, FiFileText, FiCalendar, FiBell, FiMail, FiBarChart2 } from 'react-icons/fi';

export default function IconBar() {
  const icons = [
    FiGrid, FiUsers, FiMessageSquare, FiSettings, FiBriefcase,
    FiFolder, FiFileText, FiCalendar, FiBell, FiMail, FiBarChart2
  ];

  return (
    <div className="w-16 min-h-screen bg-slate-900 dark:bg-black flex flex-col items-center justify-start py-8 space-y-8">
      <div className="text-white text-2xl font-bold">
        <FiGrid />
      </div>
      {icons.map((Icon, index) => (
        <div key={index} className="text-gray-400 hover:text-white cursor-pointer transition-colors p-2 rounded-lg">
          <Icon size={20} />
        </div>
      ))}
    </div>
  );
}
