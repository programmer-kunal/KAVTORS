import React from 'react';
import {
  MessageSquareText,
  FileText,
  Search,
  ShieldAlert,
  PhoneCall,
  Layers,
  SunMedium,
  Camera,
  Users,
  Filter,
  UserCheck,
  HardDrive,
  Sparkles,
  Compass,
  Languages,
  CheckCircle2,
  HelpCircle,
  SlidersHorizontal,
  Lightbulb,
  Cpu,
  Smartphone,
  Shield,
  Zap,
  type LucideIcon
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  MessageSquareText,
  FileText,
  Search,
  ShieldAlert,
  PhoneCall,
  Layers,
  SunMedium,
  Camera,
  Users,
  Filter,
  UserCheck,
  HardDrive,
  Sparkles,
  Compass,
  Languages,
  CheckCircle2,
  HelpCircle,
  SlidersHorizontal,
  Lightbulb,
  Cpu,
  Smartphone,
  Shield,
  Zap,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', size }) => {
  const IconComponent = ICON_MAP[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
};
