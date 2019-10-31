const fetchUsernamesFromDB = /*async*/ (year, week, since) => {
  //
  return [
    {
      username: "CDG7",
      week: 8,
      year: 2019,
      entries: 30,
      cost_of_entries: 600,
      cashes: 0,
      value_of_cashes: 0,
      profit: -600,
      cash_pct: 0.0,
      lineups: [
        {
          lineupId: 7695063,
          username: "CDG7",
          dk_points: 159.04,
          week: 8,
          year: 2019,
          rank: 50993,
          cash_value: 0,
          lineup: {
            players: [
              {
                name: "Jameis Winston",
                position: "QB",
                dk_points: 25.56,
                ownership_pct: "6.8%",
                team: "TB"
              },
              {
                name: "Chris Carson",
                position: "RB",
                dk_points: 17.7,
                ownership_pct: "14.8%",
                team: "SEA"
              }
            ]
          }
        },
        {
          lineupId: 7730869,
          username: "CDG7",
          dk_points: 149.16,
          week: 8,
          year: 2019,
          rank: 77450,
          cash_value: 0,
          lineup: {
            players: [
              {
                name: "Deshaun Watson",
                position: "QB",
                dk_points: 27.56,
                ownership_pct: "19.8%",
                team: "HOU"
              },
              {
                name: "Chris Carson",
                position: "RB",
                dk_points: 17.7,
                ownership_pct: "14.8%",
                team: "SEA"
              }
            ]
          }
        }
      ]
    }
  ];
};

module.exports = { fetchUsernamesFromDB };
