import { useState, type SetStateAction } from 'react'
import { analyzeStock } from './stockAnalysisDashboard'

function stockAnalysisDashboard() {

 const [stockData, setStockData] = useState()
 const [stockSymbol, setstockSymbol] = useState('');

  async function runStockAnalysis() {
    const gotStockData = await analyzeStock (stockSymbol)
    setStockData(gotStockData)
  }  

  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div id="stock-analysis-dashboard-title">STOCK ANALYSIS DASHBOARD</div>
          <div id="stock-analysis-dashboard-subtitle">
            Put in a stock symbol you'd like to analyze (e.g. MSFT)
          </div>
          <input
          value={stockSymbol}
          onChange={e => setstockSymbol(e.target.value)}
          ></input>
          <input id="stock-analysis-dashboard-input"></input>
          <button className="stock-analysis-dashboard-button"onClick={() => runStockAnalysis()}>Analyze</button>
          <div>
           {JSON.stringify(stockData)}
          </div>
      </div>
    </>
  )
}

export default stockAnalysisDashboard