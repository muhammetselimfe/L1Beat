import { useNavigate } from 'react-router-dom'
import useStore from '../../appStore'
import './DataList.css'

function DataList() {
  const navigate = useNavigate()
  const blockchainData = useStore((state) => state.blockchainData)

  const handleCardClick = (chainName) => {
    navigate(`/blockchain/${chainName.toLowerCase()}`)
  }

  const formatTVL = (value) => {
    return `$${(value / 1000000000).toFixed(1)}B`
  }

  const formatNumber = (num) => {
    return num.toLocaleString()
  }

  const getScoreClass = (score) => {
    if (score >= 80) return 'score score-high'
    if (score >= 50) return 'score score-medium'
    return 'score score-low'
  }

  return (
    <div className="data-list">
      <h2>Avalanche L1's Data</h2>
      <div className="blockchain-cards">
        {blockchainData.map((chain) => (
          <div 
            className="blockchain-card" 
            key={chain.name}
            onClick={() => handleCardClick(chain.name)}
            role="button"
            tabIndex={0}
          >
            <div className="card-header">
              <h3>{chain.name}</h3>
              <span className={getScoreClass(chain.score)}>
                Score: {chain.score}
              </span>
            </div>
            <div className="card-content">
              <div className="stat-item">
                <span className="stat-label">Validators</span>
                <span className="stat-value">{formatNumber(chain.validators)}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">TVL</span>
                <span className="stat-value">{formatTVL(chain.tvl)}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">TPS</span>
                <span className="stat-value">{formatNumber(chain.tps)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataList;
