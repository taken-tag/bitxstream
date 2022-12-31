import React, {useEffect, useState} from 'react'
import Loader from '../../components/Loader'
import { useRouter } from 'next/router'
import Method from "../../components/finance/Method"

export default function Index({finance}) {
    const [load, setLoade] = useState(true)    
    const router = useRouter()
  console.log(finance, 'find')
  return (
    <div>
       {router.isFallback && <Loader/>}
       {router.isFallback || !finance.length && <Loader/>}
       {!router.isFallback && <Method value={finance[0].id}/> }
    </div>
  )
}





export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export async function getStaticProps(context){
    let slug = context.params.slug.toLowerCase()
    const filterresult = FinanceData.filter((item)=>{
            let id = item.id.toLowerCase()
            return id == slug
        })

   return{
    props: {
     finance: filterresult
    }
   }
}


const FinanceData = [
    {id: 'deposit'},
    {id: 'withdraw'},
    {id: 'transfer'},
    {id: 'ledger'}
]


