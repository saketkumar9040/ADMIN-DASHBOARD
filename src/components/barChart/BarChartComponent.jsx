import { ResponsiveContainer,BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

function BarChartComponent({data}) {


  const BarchartToolTip = ({ active, payload, label }) => {
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
              {`Country : ${label}`} 
          
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
    <BarChart
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
      <XAxis dataKey="country" />
      <YAxis />
      <Tooltip content={<BarchartToolTip/>}/>
      <Legend />
      <Bar dataKey="relevance" fill="#00FF00" />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default BarChartComponent;