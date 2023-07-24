import React, { useEffect } from "react";
import Header from "../components/Common/Header";
import { useState } from "react";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { setttingChartData } from "../functions/settingChartData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/ConvertObject";
import Loader from "../components/Common/Loader";


function ComparePage(){

    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("Xrp");
    const[crypto1Data,setCrypto1Data]=useState({});
    const[crypto2Data,setCrypto2Data]=useState({});
    const[isLoading,setIsLoading]=useState(true);



    const[days,setDays]=useState(30);

    function handleDaysChange(event){
        setDays(event.target.value);
    }
    useEffect(()=>{
     getData();
    })

    async function getData(){
     setIsLoading(true);
     const data1= await getCoinData(crypto1)
     const data2= await getCoinData(crypto2)

     if(data1){
        coinObject(setCrypto1Data,data1);
    }
    if(data2){
        coinObject(setCrypto2Data,data2);
    }
    if(data1 && data2){
        const prices1= await getCoinPrices(crypto1,days,"prices");
        const prices2= await getCoinPrices(crypto2,days,"prices");

        if(prices1.length>0 && prices2.length>0){
        //  setttingChartData(setChartData,prices)

         setIsLoading(false)
        }  
    }

    }

    function handleDaysChange(event){
        setDays(event.target.value)
    }

    const handleCoinChange = async(event,isCoin2) => {
        setIsLoading(true);
        if(isCoin2){
            setCrypto2(event.target.value);
            const data= await getCoinData(event.target.value)
            if(data){
                coinObject(setCrypto2Data,data);
               const prices=await getCoinPrices(event.target.value,days,"price");
               if(prices.length>0){
                // setttingChartData(setChartData,prices)
                setIsLoading(false)
               }  
            }
        }
        else{
            setCrypto1(event.target.value); 
            const data= await getCoinData(event.target.value)
            if(data){
                coinObject(setCrypto1Data,data);
               const prices=await getCoinPrices(event.target.value,days,"price");
               if(prices.length>0){
                // setttingChartData(setChartData,prices)
                setIsLoading(false)
               }  
            }
        }
    };
    return(
        <div>
            <Header/>
            {isLoading ? (<Loader />) 
            :(
                <>
            <div className="coins-days-flex">
            <SelectCoins 
            crypto1={crypto1} 
            handleCoinChange={handleCoinChange}
            crypto2={crypto2}
             />  
             <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>
            </div>
            </>)}
        </div>
    );
}

export default ComparePage;