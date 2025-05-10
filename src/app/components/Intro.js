"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageSquareText, Code2, Bug, Users, FolderKanban, LayoutDashboard } from "lucide-react";
import { FaChartLine, FaEdit, FaTrash, FaSave, FaProjectDiagram } from "react-icons/fa";

export default function ProjectIntro() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 to-white overflow-hidden py-12 px-4 sm:px-10">
      
      {/* Animated background light blob */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-sky-100 rounded-full filter blur-3xl opacity-30 z-0"
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto text-center z-10"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          QA & Test Management Platform
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Manage your Test Plans, Test Cases, Bugs, Reports, Chats, Projects, and much more. 
          Collaborate with clients, testers, and developers — all in one powerful platform.
        </p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:bg-sky-50 transition relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-sky-100 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              <div className="text-sky-600 mb-4 z-10">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 z-10">{feature.title}</h3>
              <p className="text-sm text-gray-500 z-10">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const features = [
  {
    icon: <CheckCircle size={40} />,
    title: "Test Management",
    description: "Save, edit, and manage test plans, scenarios, test cases, and bug reports easily."
  },
  {
    icon: <MessageSquareText size={40} />,
    title: "Live Chat",
    description: "Communicate with developers, testers, and clients through integrated chat."
  },
  {
    icon: <Code2 size={40} />,
    title: "Code Sharing",
    description: "Share code snippets and debug issues collaboratively in real-time."
  },
  {
    icon: <Bug size={40} />,
    title: "Bug Tracking",
    description: "Log, track, and resolve bugs with screenshots and detailed error reports."
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Analytics & Charts",
    description: "Visualize project metrics with real-time charts and summary dashboards."
  },
  {
    icon: <Users size={40} />,
    title: "Team Collaboration",
    description: "Invite team members, assign roles, and manage client access securely."
  },
  {
    icon: <FolderKanban size={40} />,
    title: "Requirement Management",
    description: "Track requirements, user acceptance criteria, and project documentation."
  },
  {
    icon: <LayoutDashboard size={40} />,
    title: "Multi-Project Tabs",
    description: "Switch between multiple active projects easily without losing context."
  },
  {
    icon: <FaProjectDiagram size={40} />,
    title: "Recent Changes",
    description: "Track all updates and edits with a detailed change history."
  },
  {
    icon: <FaEdit size={40} />,
    title: "Editing Features",
    description: "Edit test documents, bugs, and project details quickly and efficiently."
  },
  {
    icon: <FaSave size={40} />,
    title: "Save/Auto-Save",
    description: "Auto-save important data with version control and restore capabilities."
  },
  {
    icon: <FaTrash size={40} />,
    title: "Easy Deletion",
    description: "Safely delete unnecessary test artifacts, bugs, or projects with confirmation prompts."
  },
];
