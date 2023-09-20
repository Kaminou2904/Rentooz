import React, { useEffect } from 'react'
import Lisitngcard from '../../Components/Listingcard/Lisitngcard'
import { useNavigate, useParams } from 'react-router-dom';
import Data from '../../Data/Product.json'

function Listing() {

    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    const {category} = useParams();
    const navigate = useNavigate();
    
    let listData;
    const proarr = [];
    if(category === "View All"){
        for(const prokey in Data){
            // console.log(Data[prokey])
            Data[prokey].products.forEach((pro)=> {
                proarr.push(pro);
            })
        }
    }else{
        listData = Data[category].products;
    }

    

    

  return (
    <div className='mainListing'>
        <div className="mainListingHeader bg-brand-skin w-100 position-fixed top-0 px-3 d-flex align-items-center justify-content-center p-3 px-4">
            <i className="fas fa-chevron-left fs-4 text-white" onClick={()=> navigate(-1)}></i>
            <p className="mb-0 w-100 text-white text-center text-uppercase bricolage-bold fs-5">All products</p>
        </div>
        <div className="cardWraper px-4 mt-5 pt-4">
            <div className="cardWrap">
                {/* {
                    listData.map((data)=>(
                        <Lisitngcard key={data.id} name={data.name} keyfeat={data.keyfeat} price={data.price} cate={data.cate}/>
                    ))
                } */}
                {
                    category === 'View All' ? (
                        proarr.map((data)=>(
                            <Lisitngcard key={data.id} img={data.img[0]} name={data.name} keyfeat={data.keyfeat} price={data.price} cate={data.cate}/>
                        ))
                    ): (
                        listData.map((data)=>(
                            <Lisitngcard key={data.id} img={data.img[0]} name={data.name} keyfeat={data.keyfeat} price={data.price} cate={data.cate}/>
                        ))
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Listing