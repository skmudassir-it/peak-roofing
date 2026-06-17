import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "View our portfolio of completed roofing projects — residential, commercial, and specialty work.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
