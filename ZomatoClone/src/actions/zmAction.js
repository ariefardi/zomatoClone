import axios from 'axios'
//df1c18a1249b7471951977cf07b81dd6
export function fetchingDataByCategory1 (category) {
    return(dispatch)=> {
        let url = `https://developers.zomato.com/api/v2.1/search?entity_id=74&q=jakarta&count=5&${category}=1&sort=rating&order=desc`
        axios.get(url,{
            headers: {
                ['user-key']: 'df1c18a1249b7471951977cf07b81dd6'
            }
        })
        .then(({data})=> {
            let temp = data.restaurants
            console.log(temp)
            dispatch(fetchingDataToStoreByCategory1(temp))
        })
        .catch(err=> {
            console.log(err.message)
            console.log(' ini error atau gimana')
        })
    }
}
export function fetchingDataToStoreByCategory1 (payload) {
    return {
        type: 'SET_STORE_WITH_DATA_CATEGORY1',
        payload: payload
    }
}
// export function fetchingDataByCategory2 (category) {
//     return(dispatch)=> {
//         axios
//         .get(`https://developers.zomato.com/api/v2.1/search?entity_id=74&q=jakarta&count=5&category=${category}&sort=rating&order=desc`)
//         .then(({data})=> {
//             let temp = data
//             console.log(temp)
//             // dispatch(fetchingDataToStoreSports(temp))
//         })
//     }
// }
// export function fetchingDataToStoreByCategory2 (payload) {
//     return {
//         type: 'SET_STORE_WITH_DATA_CATEGORY2',
//         payload: payload
//     }
// }