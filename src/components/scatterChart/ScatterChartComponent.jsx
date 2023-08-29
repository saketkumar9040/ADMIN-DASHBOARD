import React from 'react'
import { Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'

function ScatterChartComponent({data}) {

    const ScatterChartTooltip = ({ active, payload, label }) => {
        // console.log(payload)
        if (active && payload && payload.length) {
          return (
            <div
              className="custom-tooltip"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <p
                className="intro"
                style={{
                  textAlign: "center",
                  marginRight: 50,
                  marginLeft: 50,
                  fontWeight: 900,
                  letterSpacing: 2,
                }}
              >
                {`Region : ${payload[0]?.payload?.region}`}
              
              </p>
              <p
                className="intro"
                style={{
                  textAlign: "center",
                  marginRight: 50,
                  marginLeft: 50,
                  fontWeight: 900,
                  letterSpacing: 2,
                }}
              >
                  {`Country : ${payload[0].payload.country}`} 
              
              </p>
              <p
                className="label"
                style={{ textAlign: "center", marginRight: 50, marginLeft: 50 }}
              >{`${payload[0].dataKey} : ${payload[0]?.value}`}</p>
              <p
                className="desc"
                style={{ textAlign: "center", marginRight: 50, marginLeft: 50 }}
              >
                {payload[0]?.payload?.title}
              </p>
            </div>
          );
        }
      };

  return (
    <ResponsiveContainer width="100%" height="100%">
    <ScatterChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis />
      <YAxis />
      <Tooltip content={<ScatterChartTooltip />} />
      <Legend />
      <Scatter
        type="monotone"
        dataKey="intensity"
        stroke="#FFFF00"
        activeDot={{ r: 8 }}
      />
    </ScatterChart>
  </ResponsiveContainer>
  )
}

export default ScatterChartComponent