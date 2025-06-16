import { useEffect } from 'react'
import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { DashboardGridContent } from './stockAnalysisDashboard'
import NumberStat from './numberStat'
import LineChartContent from './lineChartContent'
import NewsList from './newsLinks'

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
         {/* Second Row */}More actions
        <div className="grid-stack-item" gs-w="10" gs-h="3">
          <DashboardGridContent className="grid-stack-item-content">
            <LineChartContent
              priceHistory={stockData.priceHistory}
            ></LineChartContent>
          </DashboardGridContent>
        </div>
         <div className="grid-stack-item" gs-w="2" gs-h="2">More actions
          <DashboardGridContent className="grid-stack-item-content">
            <div style={{marginBottom: '10px'}}>Future Earnings</div>
            {stockData.futureEarningsDates.map((nextDate: string) => (
              <div>{nextDate}</div>
            ))}
          </DashboardGridContent>
        </div>
         {/* Third Row */}More actions
        <div className="grid-stack-item" gs-w="5" gs-h="2">
          <DashboardGridContent className="grid-stack-item-content">
            <NewsList
              newsLinks={stockData.newsArticles}
            ></NewsList>
          </DashboardGridContent>
        </div>
        </div>
        </div>
    )
}    
export default DashboardGrid