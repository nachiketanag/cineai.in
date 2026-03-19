export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  duration: string;
  image: string;
  videoUrl: string;
  accentColor: string;
  description: string;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[]; // IDs of courses
  completedModules: string[]; // IDs of modules
}
