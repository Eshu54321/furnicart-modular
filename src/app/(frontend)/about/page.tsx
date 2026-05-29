import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { ALL_TEAM_QUERY } from "@/sanity/lib/queries";
import AboutClient, { TeamMember } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us - Furnicart Modular",
  description: "Learn about Furnicart Modular's history and manufacturing capabilities.",
};

export const revalidate = 60; // revalidate every minute

export default async function AboutPage() {
  const teamMembers = await client.fetch<TeamMember[]>(ALL_TEAM_QUERY);

  // If no team members in Sanity, we could fallback to the hardcoded ones,
  // but let's just pass the fetched ones.
  const displayTeam = teamMembers.length > 0 ? teamMembers : [
    {
      name: "Swarup Bole",
      role: "Managing Director & Founder",
      description: "20+ years of industrial woodcraft and commercial manufacturing expertise. Architect of Wada & Vapi operations.",
      initials: "SB",
      colorClass: "bg-primary text-white",
    },
    {
      name: "Anil Kulkarni",
      role: "Lead Workplace Strategist",
      description: "Specializes in high-capacity spatial planning, acoustics control, and dual-channel power/data workstation layouts.",
      initials: "AK",
      colorClass: "bg-accent text-white",
    },
    {
      name: "Rajesh Panchal",
      role: "Wada Factory Plant Head",
      description: "Directs high-precision German edgebanding production lines and rigorous Quality Assurance checks.",
      initials: "RP",
      colorClass: "bg-secondary text-white",
    },
  ];

  return <AboutClient team={displayTeam} />;
}
