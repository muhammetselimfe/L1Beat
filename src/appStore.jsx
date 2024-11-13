import { create } from 'zustand'

const calculateScore = (validators, tvl, tps) => {
  // Increased weight for validators (max weight: 60 points)
  // Assuming 10,000 validators is the benchmark for max score
  const validatorScore = Math.min(validators / 10000 * 60, 60);
  
  // Reduced weight for TVL (max weight: 25 points)
  const tvlScore = Math.min(tvl / 50000000000 * 25, 25);
  
  // Reduced weight for TPS (max weight: 15 points)
  const tpsScore = Math.min(tps / 1000 * 15, 15);
  
  // Calculate total score and round to 1 decimal
  return Math.min(
    Math.round((validatorScore + tvlScore + tpsScore) * 10) / 10,
    100
  );
};

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
  
  // Updated Blockchain Data with scores
  blockchainData: [
    {
      name: "Dexalot",
      validators: 874523,
      tvl: 45800000000,
      tps: 12.5,
      score: calculateScore(874523, 45800000000, 12.5)
    },
    {
      name: "GUN",
      validators: 1763,
      tvl: 8200000000,
      tps: 2843,
      score: calculateScore(1763, 8200000000, 2843)
    },
    {
      name: "Pulsar",
      validators: 1432,
      tvl: 4100000000,
      tps: 4500,
      score: calculateScore(1432, 4100000000, 4500)
    },
    {
      name: "Shrapnel",
      validators: 100,
      tvl: 3200000000,
      tps: 7000,
      score: calculateScore(100, 3200000000, 7000)
    },
    {
      name: "DFK",
      validators: 3245,
      tvl: 2800000000,
      tps: 250,
      score: calculateScore(3245, 2800000000, 250)
    },
    {
      name: "UPTN",
      validators: 10000,
      tvl: 2800000000,
      tps: 250,
      score: calculateScore(3245, 2800000000, 250)
    },
    {
      name: "Beam",
      validators: 10900,
      tvl: 2800000000,
      tps: 300,
      score: calculateScore(3245, 2800000000, 250)
    }
  ].sort((a, b) => b.score - a.score), // Sort by score in descending order

  // Actions
  updateTVLData: (newData) => set({ tvlData: newData }),
  updateTPSData: (newData) => set({ tpsData: newData }),
  updateBlockchainData: (newData) => set({ blockchainData: newData }),
}))

export default useStore
