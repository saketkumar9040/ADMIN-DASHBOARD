import React from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function LineChartComponent({data}) {

    const LineChartToolTip = ({ active, payload, label }) => {
        // console.log(payload)
        // console.log(label)
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
            </div>
          );
        }
      };
    
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis />
      <YAxis />
      <Tooltip content={<LineChartToolTip/>}/>
      <Legend />
      <Line type="monotone" dataKey="likelihood" stroke="#FD349C" />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default LineChartComponent