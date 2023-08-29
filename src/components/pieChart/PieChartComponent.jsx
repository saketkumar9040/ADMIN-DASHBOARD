import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"


function PieChartComponent({data}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        dataKey="value"
        isAnimationActive={false}
        // outerRadius={80}
        fill="#FFA500"
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
  )
}

export default PieChartComponent;