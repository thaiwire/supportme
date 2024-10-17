import React, { PureComponent } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];

export default function WorkLocationTrends() {
  return (
    <>
      {/* <ResponsiveContainer height={350} width="100%">
        <BarChart data={data}>
          <Bar dataKey="office" stackId={1} fill="red" />
          <Bar dataKey="wfh" stackId={1} fill="blue" />
        </BarChart>
      </ResponsiveContainer> */}
      <span>test recharts</span>
    </>
    //   <BarChart
    //     width={500}
    //     height={300}
    //     data={data}
    //     margin={{
    //       top: 20,
    //       right: 30,
    //       left: 20,
    //       bottom: 5,
    //     }}
    //   >
    //     <Bar dataKey="office" stackId="a" fill="#8884d8" />
    //     <Bar dataKey="wfh" stackId="a" fill="#82ca9d" />
    //   </BarChart>
    // </ResponsiveContainer>
  );
}
