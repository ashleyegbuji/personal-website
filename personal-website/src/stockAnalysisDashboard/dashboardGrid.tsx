import { useEffect } from 'react'
import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { DashboardGridContent } from './stockAnalysisDashboard'
import NumberStat from './numberStat'

function DashboardGrid({stockData}:{stockData: any}) {
  useEffect(() => {
    GridStack.init()
  });
  return (
        <div>
        Dashboard GRID Component
      <div className="grid-stack">More actions
        {/* First Row */}
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat
              value={stockData.basicInfo.marketCap}
              label='Market Cap'
              center={true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat
              value={stockData.basicInfo.fullTimeEmployees}
              label='Employees'
              center={true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
             <NumberStat
              value={stockData.basicInfo.totalRevenue}
              label='Total Revenue'
              center={true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat
              value={stockData.basicInfo.trailingEps}
              label='Earnings Per Share'
              center={true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        </div>
        </div>
    )
}    
export default DashboardGrid