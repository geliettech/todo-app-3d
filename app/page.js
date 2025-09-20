// // app/page.js
// import IconBar from '@/components/side-bar/IconBar';
// import Sidebar from '@/components/side-bar/Sidebar';
// import Header from '@/components/top-bar/Header';
// import TitleBar from '@/components/top-bar/TitleBar';
// import TaskBoard from '@/components/task-board/TaskBoard';
// import ThreeDBackground from '@/components/threeD/ThreeDBackground';

// export default function HomePage() {
//   return (
//     // <div className="relative flex bg-slate-100 dark:bg-slate-900 min-h-screen">
//     <div className="flex bg-[#ffffff] dark:bg-[#2A2B2F]">
//       <ThreeDBackground />
//       {/* <div className="z-10 flex flex-grow"> */}
//       <div className="flex z-10">
//         <IconBar />
//         <Sidebar />
//         {/* <div className="flex-1 flex flex-col"> */}
//         <div className="">
//           <Header />
//           <TitleBar />
//           {/* <main className="p-8 flex-1"> */}
//           <main className="">
//             <TaskBoard />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }
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
      <div className="flex z-10 flex-grow">
        <IconBar />
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <TitleBar />
          <main className="p-8 flex-1">
            <TaskBoard />
          </main>
        </div>
      </div>
    </div>
  );
}
