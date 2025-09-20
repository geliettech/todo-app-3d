import { v4 as uuidv4 } from "uuid";

const InitialTasks = [
  {
    id: uuidv4(),
    title: "Design new ui presentation",
    description: "Dribbble marketing",
    status: "todo",
    progress: 7,
    date: "26 Aug 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=a",
      "https://i.pravatar.cc/150?u=b",
    ],
  },
  {
    id: uuidv4(),
    title: "Add more ui/ux mockups",
    description: "Pinterest promotion",
    status: "todo",
    progress: 4,
    date: "25 Aug 2022",
    assignees: ["https://i.pravatar.cc/150?u=c"],
    has3D: true,
  },
  {
    id: uuidv4(),
    title: "Design few mobile screens",
    description: "Dropbox mobile app",
    status: "todo",
    progress: 3,
    date: "26 Aug 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=d",
      "https://i.pravatar.cc/150?u=e",
    ],
  },
  {
    id: uuidv4(),
    title: "Create a tweet and promote",
    description: "Twitter marketing",
    status: "todo",
    progress: 1,
    date: "27 Aug 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=f",
      "https://i.pravatar.cc/150?u=g",
    ],
  },
  {
    id: uuidv4(),
    title: "Design system update",
    description: "Oreo website project",
    status: "inprogress",
    progress: 3,
    date: "12 Nov 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=h",
      "https://i.pravatar.cc/150?u=i",
    ],
  },
  {
    id: uuidv4(),
    title: "Create brand guideline",
    description: "Oreo branding project",
    status: "inprogress",
    progress: 7,
    date: "13 Nov 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=j",
      "https://i.pravatar.cc/150?u=k",
    ],
  },
  {
    id: uuidv4(),
    title: "Create wireframe for ios app",
    description: "Oreo ios app project",
    status: "inprogress",
    progress: 4,
    date: "14 Nov 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=l",
      "https://i.pravatar.cc/150?u=m",
    ],
  },
  {
    id: uuidv4(),
    title: "Create ui kit for layout",
    description: "Crypto mobile app",
    status: "inprogress",
    progress: 3,
    date: "15 Nov 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=n",
      "https://i.pravatar.cc/150?u=o",
    ],
  },
  {
    id: uuidv4(),
    title: "Add product to the market",
    description: "Ulll marketplace",
    status: "done",
    progress: 10,
    date: "6 Jan 2022",
    assignees: ["https://i.pravatar.cc/150?u=p"],
  },
  {
    id: uuidv4(),
    title: "Launch product promotion",
    description: "Kickstarter campaign",
    status: "done",
    progress: 10,
    date: "7 Jan 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=q",
      "https://i.pravatar.cc/150?u=r",
    ],
  },
  {
    id: uuidv4(),
    title: "Make twitter banner",
    description: "Twitter marketing",
    status: "done",
    progress: 10,
    date: "8 Jan 2022",
    assignees: [
      "https://i.pravatar.cc/150?u=s",
      "https://i.pravatar.cc/150?u=t",
    ],
  },
];

export default InitialTasks;
