import { useEffect, useState } from "react"

function useCurrencyInfo (currency) {

    // initial value as empty object to avoid crash if API doesn't return any value
    const [data, setData] = useState({})

    // need to call API when the hook loads or someone uses
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())        // convert response to JSON
        .then((res) => setData(res[currency]))      // response here is in JSON
    }, [currency])        // fetch API whenever there is a change in dependencies => currency
    // return
    return data;
}

export default useCurrencyInfo;     // return the entire method