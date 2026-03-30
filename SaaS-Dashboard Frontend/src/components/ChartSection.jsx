import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export const ChartSection = () => {

    const data = [
        {name: "Jan" , users: 400},
        {name: "Feb" , users: 800},
        {name: "Mar" , users: 600},
        {name: "Apr" , users: 1200},
        {name: "May" , users: 900}
    ]

  return (
    <div className="p-6 rounded-2xl shadow-md space-y-2">
        <h1 className="text-xl py-2 mb-4">Activity Overview</h1>

        <ResponsiveContainer width= "100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey= "name"/>
                <YAxis />
                <Tooltip />
                <Line type= "monotone" dataKey= "users" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>

    </div>
  )
}
