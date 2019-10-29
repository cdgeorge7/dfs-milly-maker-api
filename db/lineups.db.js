const fetchLineupsFromDB = /*async*/ (year, week, since) => {
  //
  return [
    {
      lineupId: 7655502,
      username: "nawmsayin",
      dk_points: 258.58,
      week: 8,
      year: 2019,
      rank: 1,
      cash_value: 1000000,
      lineup: {
        players: [
          {
            name: "Daniel Jones",
            position: "QB",
            dk_points: 32.56,
            ownership_pct: "2.8%",
            team: "NYG"
          },
          {
            name: "Latavius Murray",
            position: "RB",
            dk_points: 39.8,
            ownership_pct: "34.8%",
            team: "NO"
          }
        ]
      }
    },
    {
      lineupId: 7655504,
      username: "samryan12",
      dk_points: 256.68,
      week: 8,
      year: 2019,
      rank: 2,
      cash_value: 150000,
      lineup: {
        players: [
          {
            name: "Matthew Stafford",
            position: "QB",
            dk_points: 29.56,
            ownership_pct: "16.8%",
            team: "DET"
          },
          {
            name: "Latavius Murray",
            position: "RB",
            dk_points: 39.8,
            ownership_pct: "34.8%",
            team: "NO"
          }
        ]
      }
    }
  ];
};

module.exports = { fetchLineupsFromDB };
