export const Card = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border-t-2 border-blue-500 shadow-sm space-y-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ">
      <div className="text-sm text-gray-500 flex items-center justify-between">{title}
        <div className="text-lg">
          {icon}
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-700 tracking-tight">{value}</h1>
      <p className="font-medium text-green-600">{subtitle}</p>
    </div>
  )
}
