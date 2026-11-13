import { 
  LayoutDashboard, 
  Box, 
  Radar, 
  Zap, 
  ShieldAlert, 
  Terminal, 
  Cpu, 
  Lock, 
  Smartphone, 
  SmartphoneNfc,
  Bot
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'modules', icon: Box, label: 'Modules' },
  { id: 'port-scanner', icon: Radar, label: 'Port Scanner' },
  { id: 'payload-gen', icon: Zap, label: 'Payload Gen' },
  { id: 'workspace', icon: Cpu, label: 'Workspace' },
  { id: 'inject-evade', icon: ShieldAlert, label: 'Inject & Evade', active: true },
  { id: 'vuln-scanner', icon: Terminal, label: 'Vuln Scanner' },
  { id: 'c2-server', icon: Lock, label: 'C2 Server' },
  { id: 'ai-autopilot', icon: Bot, label: 'AI Autopilot' },
  { id: 'apk-builder', icon: Smartphone, label: 'APK Builder' },
  { id: 'android-adb', icon: SmartphoneNfc, label: 'Android ADB' },
];

export const EVASION_TECHNIQUES = [
  {
    id: 'docx_opc',
    title: 'docx_opc',
    description: 'DOCX OPC Smuggling - payload hidden as custom XML part. No macros. Opens normally. AV evasion: HIGH.',
    level: 'HIGH'
  },
  {
    id: 'exif',
    title: 'exif',
    description: 'EXIF Comment Smuggling - encodes payload in JPEG comment marker. No Pillow needed. AV evasion: MEDIUM.',
    level: 'MEDIUM'
  },
  {
    id: 'lsb',
    title: 'lsb',
    description: 'LSB Steganography - hides payload in image pixel bits (PNG output). No format corruption. AV evasion: HIGH.',
    level: 'HIGH'
  },
  {
    id: 'pdf_js',
    title: 'pdf_js',
    description: 'PDF JavaScript AutoOpen - charCode-obfuscated JS trigger. Requires vulnerable PDF reader. AV evasion: MEDIUM.',
    level: 'MEDIUM'
  },
  {
    id: 'polyglot',
    title: 'polyglot',
    description: 'Polyglot Image+ZIP - valid image + valid ZIP in one file. Dropper extracts ZIP layer. AV evasion: HIGH.',
    level: 'HIGH'
  }
];
