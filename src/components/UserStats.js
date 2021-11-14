import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { STATS_USER } from "../graphql/Stats";
import { Bar, Pie, Radar } from "react-chartjs-2";
import { Scale } from "chart.js";

function UserStats() {
  //   const { error, loading, data } = useQuery(STATS_USER);
  //   const [repositories, setRepos] = useState([]);

  //   useEffect(() => {
  //     console.log("data stats : ", data);
  //   }, [data]);
  return (
    <div>
      <Radar
        data={{
          labels: [
            "Html",
            "Javascript",
            "C#",
            "ASP",
            "CSS",
            "TSQL",
            "Java",
            "Php",
            "Shell",
            "Typecript ",
            "Python",
          ],

          datasets: [
            {
              label: "languages",
              data: [12, 19, 30, 6, 14, 16, 19, 15, 8, 22, 18],
              backgroundColor: [
                "rgb(227, 76, 38, 0.2)",
                "rgb(241, 224, 90,  0.2)",
                "rgb(106, 64, 253, 0.2)",
                "rgb(86, 61, 124, 0.2)",
                "rgb(227, 140, 0, 0.2)",
                "rgb(176, 114, 25, 0.2)",
                "rgb(137, 224, 81, 0.2)",
                "rgb(43, 116, 137, 0.2)",
                "rgb(53, 114, 165, 0.2)",
              ],
              borderColor: [
                "rgb(227, 76, 38, 1)",
                "rgb(241, 224, 90,  1)",
                "rgb(106, 64, 253, 1)",
                "rgb(86, 61, 124, 1)",
                "rgb(227, 140, 0, 1)",
                "rgb(176, 114, 25, 1)",
                "rgb(137, 224, 81, 1)",
                "rgb(43, 116, 137, 1)",
                "rgb(53, 114, 165, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={800}
        height={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default UserStats;
