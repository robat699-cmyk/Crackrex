import { SIDEBAR_ITEMS } from '../data';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#0a0a0c] border-r border-white/5 flex flex-col z-50">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cyber-red rounded flex items-center justify-center">
            <span className="font-bold text-black text-xl italic">R</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-white leading-none">CRACKREX</h1>
            <p className="text-[10px] text-white/40 font-mono tracking-widest mt-1">v3.0 // T-REX ELITE</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 mt-4 overflow-y-auto no-scrollbar">
        {SIDEBAR_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center gap-4 px-6 py-3 transition-all duration-200 group relative ${
              item.active 
                ? 'active-nav' 
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-cyber-red' : 'group-hover:text-white'}`} />
            <span className="text-sm font-medium tracking-wide">{item.label}</span>
            {item.active && (
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-cyber-red" />
            )}
          </button>
        ))}
      </nav>

      <div className="p-6 mt-auto border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-green-500/80 uppercase">Framework Online</span>
        </div>
      </div>
    </aside>
  );
}
