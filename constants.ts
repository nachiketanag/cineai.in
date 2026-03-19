import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: "c1",
    title: "The 30-Second AI Ad Spot",
    category: "Commercials",
    instructor: "Leo K.",
    duration: "4h 20m",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    accentColor: "#CCFF00",
    description: "Master the art of creating high-impact AI commercials that convert.",
    modules: [
      { id: "m1", title: "Introduction to AI Ads", isCompleted: false },
      { id: "m2", title: "Scripting with LLMs", isCompleted: false },
      { id: "m3", title: "Visual Generation Workflows", isCompleted: false },
      { id: "m4", title: "Final Assembly & Editing", isCompleted: false },
    ]
  },
  {
    id: "c2",
    title: "Narrative Storytelling with Sora",
    category: "Cinema",
    instructor: "Elena R.",
    duration: "6h 15m",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    accentColor: "#2D5BFF",
    description: "Learn how to use Sora to create cinematic narrative films.",
    modules: [
      { id: "m5", title: "World Building in AI", isCompleted: false },
      { id: "m6", title: "Character Consistency", isCompleted: false },
      { id: "m7", title: "Cinematic Prompting", isCompleted: false },
    ]
  },
  {
    id: "c3",
    title: "The 'Infinite Content' Engine",
    category: "Automation",
    instructor: "Marcus T.",
    duration: "3h 45m",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    accentColor: "#FF6B6B",
    description: "Automate your content creation pipeline using AI agents.",
    modules: [
      { id: "m8", title: "Agentic Workflows", isCompleted: false },
      { id: "m9", title: "Batch Processing Video", isCompleted: false },
    ]
  }
];

export const DUMMY_USER = {
  id: "u1",
  name: "Filmmaker Pro",
  email: "test@cineai.in",
  password: "password123",
  enrolledCourses: ["c1", "c2", "c3"],
  completedModules: ["m1", "m2"]
};
