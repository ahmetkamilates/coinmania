import React, { useEffect, useState } from 'react'
import DetailView from '../views/DetailView'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { DetailModel } from '../models/DetailModel'
const DetailController = () => {
 const {id} =  useParams()
 const [coin,setCoin] = useState(null)
 const [history,setHistory] = useState([])
  useEffect(() => {
    axios.get(`/assets/${id}`)
    .then((res) => setCoin(res.data.data))
    .catch((err) => console.log(err))

    axios.get(`/assets/${id}/history?interval=d1`)
    .then((res) => setHistory(res.data.data) )
    .catch((err) => console.log(err))
  },[])
 const model = new DetailModel(coin,history)
  return (
    <DetailView model={model}/>
  )
}

export default DetailController