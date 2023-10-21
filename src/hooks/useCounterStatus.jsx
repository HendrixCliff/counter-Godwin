import{ useState }from 'react'

export default function useCounterStatus(initialCount = 0,) {
    const [census, setCensus] = useState(initialCount)
    
    function increment() {
       setCensus((prevCensus)=> ++prevCensus)
     }
     function decrement() {
       setCensus((prevCensus)=> --prevCensus)   
     }
     function reset() {
        setCensus(0) 
     }
     function setValue(value) {
      setCensus(value)
     }
    return  [census, increment, decrement, reset, setValue]
}