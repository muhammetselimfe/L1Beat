import { useParams, useNavigate } from 'react-router-dom'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import useStore from '../../appStore'
import './BlockchainDetails.css'

function BlockchainDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const blockchain = useStore((state) => 
    state.blockchainData.find(chain => chain.name.toLowerCase() === id.toLowerCase())
  )
  
  if (!blockchain) {
    return (
      <div className="details-container">
        <div className="not-found">
          <h2>Blockchain not found</h2>
          <button onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
      </div>
    )
  }

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>{blockchain.name}</h1>
        <span className={`score score-${blockchain.score >= 80 ? 'high' : blockchain.score >= 50 ? 'medium' : 'low'}`}>
          Score: {blockchain.score}
        </span>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <h3>Validator Information</h3>
          <div className="detail-content">
            <p>Total Validators: {blockchain.validators.toLocaleString()}</p>
            <p>Stake Requirement: {blockchain.networkStats.stakeRequirement}</p>
            <p>Uptime: {blockchain.networkStats.uptime}</p>
          </div>
        </div>

        <div className="detail-card stake-distribution">
          <h3>Stake Distribution</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={blockchain.stakeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {blockchain.stakeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="detail-card">
          <h3>Network Statistics</h3>
          <div className="detail-content">
            <p>Block Time: {blockchain.networkStats.blockTime}</p>
            <p>Finality: {blockchain.networkStats.finality}</p>
            <p>Network Usage: {blockchain.networkStats.networkUsage}</p>
          </div>
        </div>

        <div className="detail-card">
          <h3>Economics</h3>
          <div className="detail-content">
            <p>Market Cap: ${blockchain.economics.marketCap}</p>
            <p>Circulating Supply: {blockchain.economics.circulatingSupply}</p>
            <p>Total Supply: {blockchain.economics.totalSupply}</p>
            <p>Staking APR: {blockchain.economics.stakingAPR}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockchainDetails
