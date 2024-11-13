import TVLGraph from '../TVLGraph/TVLGraph'
import TPSData from '../TPSData/TPSData'
import DataList from '../DataList/DataList'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="top-row">
        <TVLGraph />
        <TPSData />
      </div>
      <DataList />
    </div>
  )
}

export default Dashboard
