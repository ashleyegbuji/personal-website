import { useState, type SetStateAction } from 'react'
import { analyzeStock } from './stockAnalysisDashboard'
import { Oval } from 'react-loader-spinner'

function stockAnalysisDashboard() {

 const [stockData, setStockData] = useState()
 const [stockSymbol, setstockSymbol] = useState('');
 const [isLoading, setIsLoading] = useState(false)
 const [gotData, setGotData] = useState(false)


 function goBack () {
      setGotData(true)
      setIsLoading(false)
 }
 async function runStockAnalysis() {
    setIsLoading(true)
    const gotStockData = await analyzeStock (stockSymbol)
    if (gotStockData) {
      setStockData(gotStockData)
      setGotData(true)
      setIsLoading(false)
    } else {
      goBack()
    }
    
   
}  
 if (gotData) {
    return (
        <div>
         <div onClick={() => goBack()}>Back</div>
          <div>
           {JSON.stringify(stockData)}
          </div>
        </div>
    )
 }
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <div id="stock-analysis-dashboard-title">STOCK ANALYSIS DASHBOARD</div>
          {isLoading ? (
            <div>
              <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          </div>
          ) : (
            <div>
          <div id="stock-analysis-dashboard-subtitle">
            Put in a stock symbol you'd like to analyze (e.g. MSFT)
          </div>
          <input
          value={stockSymbol}
          onChange={e => setstockSymbol(e.target.value)}
          ></input>
          <input id="stock-analysis-dashboard-input"></input>
          <button className="stock-analysis-dashboard-button"onClick={() => runStockAnalysis()}>Analyze</button>
          </div>
           )}
      </div>
    </>
  )
}
export default stockAnalysisDashboard