import React from 'react';

export const TableComponent = () => {
  // Placeholder data for 10 rows
  const rows = Array.from({ length: 10 }, (v, i) => ({
    placement: `#${i + 1}`,
    name: `Name ${i + 1}`,
    score: `Score ${i + 1}`,
  }));

  return (
    <div style={{ width: '50%'}}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ width: '15%', padding: '8px', textAlign: 'left' }}>Placement</th>
            <th style={{ width: '70%', padding: '8px', textAlign: 'left' }}></th>
            <th style={{ width: '15%', padding: '8px', textAlign: 'left' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', textAlign: 'left' }}>{row.placement}</td>
              <td style={{ padding: '8px', textAlign: 'left' }}>{row.name}</td>
              <td style={{ padding: '8px', textAlign: 'left' }}>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
