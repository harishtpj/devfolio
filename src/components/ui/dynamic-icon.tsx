import { FolderGit2 } from "lucide-react";
import { FaDatabase, FaGlobe, FaMobileAlt, FaBrain, FaTools } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdCamera } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { TbProtocol } from "react-icons/tb";
import { SiCompilerexplorer } from "react-icons/si";

const techIcons: Record<string, IconType> = {
    "System": FaGears,
    "DB": FaDatabase,
    "Web": FaGlobe,
    "Mobile": FaMobileAlt,
    "AI/ML": FaBrain,
    "Computer Vision": MdCamera,
    "Protocol": TbProtocol,
    "Compiler": SiCompilerexplorer,
    "Tool": FaTools,
    "Default": FolderGit2,
}

export function DynamicIcon({ name, ...props }: { name: string; className?: string }) {
    const IconComponent = techIcons[name] || FolderGit2;
    return <IconComponent {...props} />;
}