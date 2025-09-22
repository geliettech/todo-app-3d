import SideBar from "@/components/SideBar";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import TaskBoard from "@/components/TaskBoard/TaskBoard";
import ThreeDBackground from "@/components/ThreeDBackground";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen">
      {/* 3D Background */}
      <ThreeDBackground />

      {/* Foreground UI */}
      <div className="flex z-10">
        <SideBar />
        <Projects />
        <div className="flex flex-col">
          <Header />
          <Menu />
          <main className="p-6">
            <TaskBoard />
          </main>
        </div>
      </div>
    </div>
  );
}
