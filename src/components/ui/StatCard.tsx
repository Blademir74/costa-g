interface StatCardProps {
  value: string
  label: string
  delay?: number
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="text-center p-6 lg:p-8 rounded-2xl bg-white/50 backdrop-blur-sm
                 transition-all duration-500 hover:bg-white hover:shadow-luxury"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold 
                   bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent
                   mb-3"
      >
        {value}
      </div>
      <div className="text-slate-600 font-medium text-sm lg:text-base">
        {label}
      </div>
    </div>
  )
}
