import React from 'react';
import Plot from 'react-plotly.js';

const LineDisplay = ({ type }) => {
  let data = [];

  switch(type) {
    case 'Parallel':
      data = [
        {
          x: [0, 1], y: [0, 1],
          mode: 'lines',
          line: {color: 'blue', width: 4}
        },
        {
          x: [0, 1], y: [0.2, 1.2],
          mode: 'lines',
          line: {color: 'red', width: 4}
        }
      ];
      break;
    case 'Perpendicular':
      data = [
        {
          x: [0.5, 0.5], y: [0, 1],
          mode: 'lines',
          line: {color: 'green', width: 4}
        },
        {
          x: [0, 1], y: [0.5, 0.5],
          mode: 'lines',
          line: {color: 'purple', width: 4}
        }
      ];
      break;
    case 'None':
      data = [
        {
          x: [0, 1], y: [0, 1],
          mode: 'lines',
          line: {color: 'black', width: 4}
        },
        {
          x: [1, 0], y: [0, 1],
          mode: 'lines',
          line: {color: 'yellow', width: 4}
        }
      ];
      break;
  }

  return (
    <Plot
      data={data}
      layout={{autosize: true, title: 'Lines', showlegend: false, xaxis: { showgrid: false, zeroline: false, showticklabels: false}, yaxis: { showgrid: false, zeroline: false, showticklabels: false}}}
      useResizeHandler={true}
      style={{width: "100%", height: "100%"}}
    />
  );
};

export default LineDisplay;



