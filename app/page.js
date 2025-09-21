import IconBar from '@/components/side-bar/IconBar';
import Sidebar from '@/components/side-bar/Sidebar';
import Header from '@/components/top-bar/Header';
import TitleBar from '@/components/top-bar/TitleBar';
import TaskBoard from '@/components/task-board/TaskBoard';
import ThreeDBackground from '@/components/threeD/ThreeDBackground';

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Foreground UI */}
      <div className="flex z-10">
        <IconBar />
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <TitleBar />
          <main className="p-6">
            <TaskBoard />
          </main>
        </div>
      </div>
    </div>
  );
}
