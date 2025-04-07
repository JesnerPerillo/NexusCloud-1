import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

Graph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      approvedCount: PropTypes.number.isRequired
    })
  ).isRequired
};


// const data = [
//   { name: 'Jan', value: 400 },
//   { name: 'Feb', value: 300 },
//   { name: 'Mar', value: 500 },
//   { name: 'Apr', value: 700 },
//   { name: 'May', value: 600 },
//   { name: 'Jun', value: 800 },
//   { name: 'Jul', value: 300 },
//   { name: 'Aug', value: 700 },
//   { name: 'Sep', value: 100 },
//   { name: 'Oct', value: 900 },
//   { name: 'Nov', value: 400 },
//   { name: 'Dec', value: 200 },
// ];

// export default function Graph() {
//   return (
//     <div className="w-full h-60">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           {/* ✅ Grid */}
//           <CartesianGrid stroke="#cccccc" strokeDasharray="5 5" />
          
//           {/* ✅ X and Y Axis */}
//           <XAxis dataKey="name" stroke="#000" />
//           <YAxis stroke="#000" />
          
//           {/* ✅ Tooltip */}
//           <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }} />
          
//           {/* ✅ Line */}
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#000"
//             strokeWidth={2}
//             dot={{ fill: '#000', r: 3 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

function formatMonthLabel(month) {
  const date = new Date(`${month}-01`);
  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}

export default function Graph({ data }) {
  const formattedData = (data || []).map((item) => ({
    ...item,
    label: formatMonthLabel(item.month)
  }));

  return (
    <div className="w-full h-60">
      {data && data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" stroke="#000" />
            <YAxis allowDecimals={false} stroke="#000" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="approvedCount"
              stroke="#000"
              strokeWidth={2}
              dot={{ fill: '#000', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
}