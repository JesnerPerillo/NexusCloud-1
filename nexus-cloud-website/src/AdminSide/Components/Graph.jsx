import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 700 },
  { name: 'May', value: 600 },
  { name: 'Jun', value: 800 },
  { name: 'Jul', value: 300 },
  { name: 'Aug', value: 700 },
  { name: 'Sep', value: 100 },
  { name: 'Oct', value: 900 },
  { name: 'Nov', value: 400 },
  { name: 'Dec', value: 200 },
];

export default function Graph() {
  return (
    <div className="w-full h-60">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* ✅ Grid */}
          <CartesianGrid stroke="#cccccc" strokeDasharray="5 5" />
          
          {/* ✅ X and Y Axis */}
          <XAxis dataKey="name" stroke="#000" />
          <YAxis stroke="#000" />
          
          {/* ✅ Tooltip */}
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }} />
          
          {/* ✅ Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#000"
            strokeWidth={2}
            dot={{ fill: '#000', r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
