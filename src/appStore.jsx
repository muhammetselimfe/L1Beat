import { create } from 'zustand'

const calculateScore = (validators, tvl, tps) => {
  const validatorScore = Math.min(validators / 10000 * 60, 60)
  const tvlScore = Math.min(tvl / 50000000000 * 25, 25)
  const tpsScore = Math.min(tps / 1000 * 15, 15)
  return Math.min(Math.round((validatorScore + tvlScore + tpsScore) * 10) / 10, 100)
}

const useStore = create((set) => ({
  // TVL Data
  tvlData: [
    { date: '2024-03-01', tvl: 2500000000 },
    { date: '2024-03-02', tvl: 2720000000 },
    { date: '2024-03-03', tvl: 2850000000 },
    { date: '2024-03-04', tvl: 2650000000 },
    { date: '2024-03-05', tvl: 2900000000 },
    { date: '2024-03-06', tvl: 3100000000 },
    { date: '2024-03-07', tvl: 3250000000 },
  ],
  
  // TPS Data
  tpsData: [
    { name: '1m', tps: 15 },
    { name: '5m', tps: 18 },
    { name: '15m', tps: 22 },
    { name: '30m', tps: 20 },
    { name: '1h', tps: 25 },
    { name: '6h', tps: 30 },
    { name: '24h', tps: 28 },
  ],
  
  // Blockchain Data with detailed information
  blockchainData: [
    {
      name: "Dexalot",
      validators: 10,
      tvl: 45800000000,
      tps: 12.5,
      score: calculateScore(874523, 45800000000, 12.5),
      networkStats: {
        blockTime: "2s",
        finality: "2s",
        networkUsage: "65%",
        stakeRequirement: "2,000 AVAX",
        uptime: "99.9%"
      },
      economics: {
        marketCap: "500M",
        circulatingSupply: "100M",
        totalSupply: "250M",
        stakingAPR: "8.5%"
      },
      stakeDistribution: [
        { name: "Top 1-10", value: 35, fill: "#8884d8" },
        { name: "Top 11-50", value: 30, fill: "#82ca9d" },
        { name: "Top 51-100", value: 20, fill: "#ffc658" },
        { name: "Others", value: 15, fill: "#ff8042" }
      ]
    },
    {
      name: "GUN",
      validators: 10,
      tvl: 8200000000,
      tps: 2843,
      score: calculateScore(1763, 8200000000, 2843),
      networkStats: {
        blockTime: "1.5s",
        finality: "1.5s",
        networkUsage: "72%",
        stakeRequirement: "2,500 AVAX",
        uptime: "99.8%"
      },
      economics: {
        marketCap: "300M",
        circulatingSupply: "80M",
        totalSupply: "200M",
        stakingAPR: "9.2%"
      },
      stakeDistribution: [
        { name: "Top 1-10", value: 40, fill: "#8884d8" },
        { name: "Top 11-50", value: 25, fill: "#82ca9d" },
        { name: "Top 51-100", value: 20, fill: "#ffc658" },
        { name: "Others", value: 15, fill: "#ff8042" }
      ]
    },
    {
      name: "Pulsar",
      validators: 7,
      tvl: 62500000000,
      tps: 4500,
      score: calculateScore(1250000, 62500000000, 4500),
      networkStats: {
        blockTime: "1s",
        finality: "1s",
        networkUsage: "78%",
        stakeRequirement: "2,000 AVAX",
        uptime: "99.98%"
      },
      economics: {
        marketCap: "12B",
        circulatingSupply: "350M",
        totalSupply: "720M",
        stakingAPR: "7.8%"
      },
      stakeDistribution: [
        { name: "Top 1-10", value: 30, fill: "#8884d8" },
        { name: "Top 11-50", value: 35, fill: "#82ca9d" },
        { name: "Top 51-100", value: 20, fill: "#ffc658" },
        { name: "Others", value: 15, fill: "#ff8042" }
      ]
    },
    {
      name: "Beam",
      validators: 10,
      tvl: 158000000000,
      tps: 30,
      score: calculateScore(945000, 158000000000, 30),
      networkStats: {
        blockTime: "12s",
        finality: "12s",
        networkUsage: "85%",
        stakeRequirement: "32 ETH",
        uptime: "99.95%"
      },
      economics: {
        marketCap: "450B",
        circulatingSupply: "120M",
        totalSupply: "120M",
        stakingAPR: "4.2%"
      },
      stakeDistribution: [
        { name: "Top 1-10", value: 25, fill: "#8884d8" },
        { name: "Top 11-50", value: 30, fill: "#82ca9d" },
        { name: "Top 51-100", value: 25, fill: "#ffc658" },
        { name: "Others", value: 20, fill: "#ff8042" }
      ]
    },
    {
      name: "UTNP",
      validators: 10,
      tvl: 12500000000,
      tps: 65000,
      score: calculateScore(2100, 12500000000, 65000),
      networkStats: {
        blockTime: "0.4s",
        finality: "0.4s",
        networkUsage: "70%",
        stakeRequirement: "100 SOL",
        uptime: "99.8%"
      },
      economics: {
        marketCap: "45B",
        circulatingSupply: "410M",
        totalSupply: "535M",
        stakingAPR: "6.7%"
      },
      stakeDistribution: [
        { name: "Top 1-10", value: 35, fill: "#8884d8" },
        { name: "Top 11-50", value: 30, fill: "#82ca9d" },
        { name: "Top 51-100", value: 20, fill: "#ffc658" },
        { name: "Others", value: 15, fill: "#ff8042" }
      ]
    }
  ].sort((a, b) => b.score - a.score),

  // Historical Data
  historicalData: {
    validators: {
      "Dexalot": [
        { date: '2024-03-01', count: 850000 },
        { date: '2024-03-07', count: 874523 }
      ],
      "GUN": [
        { date: '2024-03-01', count: 1700 },
        { date: '2024-03-07', count: 1763 }
      ],
      "Avalanche": [
        { date: '2024-03-01', count: 1200000 },
        { date: '2024-03-07', count: 1250000 }
      ],
      "Ethereum": [
        { date: '2024-03-01', count: 925000 },
        { date: '2024-03-07', count: 945000 }
      ],
      "Solana": [
        { date: '2024-03-01', count: 2000 },
        { date: '2024-03-07', count: 2100 }
      ]
    },
    tps: {
      "Dexalot": [
        { date: '2024-03-01', value: 10.2 },
        { date: '2024-03-07', value: 12.5 }
      ],
      "GUN": [
        { date: '2024-03-01', value: 2500 },
        { date: '2024-03-07', value: 2843 }
      ],
      "Avalanche": [
        { date: '2024-03-01', value: 4200 },
        { date: '2024-03-07', value: 4500 }
      ],
      "Ethereum": [
        { date: '2024-03-01', value: 28 },
        { date: '2024-03-07', value: 30 }
      ],
      "Solana": [
        { date: '2024-03-01', value: 62000 },
        { date: '2024-03-07', value: 65000 }
      ]
    }
  },

  // Network Status
  networkStatus: {
    "Dexalot": {
      status: "operational",
      lastUpdate: "2024-03-07T15:00:00Z",
      incidents: []
    },
    "GUN": {
      status: "operational",
      lastUpdate: "2024-03-07T15:00:00Z",
      incidents: []
    },
    "Avalanche": {
      status: "operational",
      lastUpdate: "2024-03-07T15:00:00Z",
      incidents: []
    },
    "Ethereum": {
      status: "operational",
      lastUpdate: "2024-03-07T15:00:00Z",
      incidents: []
    },
    "Solana": {
      status: "operational",
      lastUpdate: "2024-03-07T15:00:00Z",
      incidents: []
    }
  },

  // Actions
  updateTVLData: (newData) => set({ tvlData: newData }),
  updateTPSData: (newData) => set({ tpsData: newData }),
  updateBlockchainData: (newData) => set({ blockchainData: newData }),
  updateHistoricalData: (newData) => set((state) => ({
    historicalData: { ...state.historicalData, ...newData }
  })),
  updateNetworkStatus: (chainName, status) => set((state) => ({
    networkStatus: {
      ...state.networkStatus,
      [chainName]: { ...state.networkStatus[chainName], ...status }
    }
  }))
}))

export default useStore
