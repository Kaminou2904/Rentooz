import React from 'react'
import Lisitngcard from '../../Components/Listingcard/Lisitngcard'
import { useNavigate } from 'react-router-dom'

function Listing() {

    const navigate = useNavigate();

  return (
    <div className='mainListing'>
        <div className="mainListingHeader bg-brand-skin w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
            <i class="fas fa-chevron-left fs-4 text-white" onClick={()=> navigate(-1)}></i>
            <p className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">All products</p>
        </div>
        <div className="cardWraper px-4 mt-5 pt-4">
            <div className="cardWrap">
                <Lisitngcard/>
                <Lisitngcard/>
                <Lisitngcard/>
                <Lisitngcard/>
                <Lisitngcard/>
            </div>
        </div>
    </div>
  )
}

export default Listing