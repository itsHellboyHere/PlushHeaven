import axios from 'axios'

const productionUrl = 'https://e-commerce-api-fhux.onrender.com';

export const customFetch = axios.create({
    baseURL: productionUrl,
    withCredentials:true,
    
})


export const formatPrice = (price) => {
    const indianAmount = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0, // Set minimum fraction digits to 0
    }).format(price);

    return indianAmount;
}



export const genrateAmountOptions =(number) =>{
    return Array.from({length:number},(_,index)=>{
        const amount = index+1
        return <option key={amount} value={amount}>{amount}</option>
    })
}
