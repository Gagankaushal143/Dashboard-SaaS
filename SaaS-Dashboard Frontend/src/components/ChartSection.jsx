import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export const ChartSection = ({ stats }) => {

    const data = [
        { name: "Jan", users: stats?.users - 862 },
        { name: "Feb", users: stats?.users - 632 },
        { name: "Mar", users: stats?.users - 519 },
        { name: "Apr", users: stats?.users - 387 },
        { name: "May", users: stats?.users - 0 }
    ]

    return (
        <div className="p-6 rounded-2xl shadow-md space-y-2">
            <h1 className="text-xl py-2 mb-4">Activity Overview</h1>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}
