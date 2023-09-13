import React from 'react'
import Lisitngcard from '../../Components/Listingcard/Lisitngcard'

function Listing() {
  return (
    <div className='mainListing'>
        <div className="mainListingHeader bg-brand-skin w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center">
            <i class="fas fa-chevron-left fs-4 text-white"></i>
        </div>
        <Lisitngcard/>
    </div>
  )
}

export default Listing