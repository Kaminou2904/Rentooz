import React from 'react';
import './Cardgroup.css';
import Productcard from '../Productcardgo/Productcard.jsx';
import Smprocard from '../Smprocard/Smprocard';
import Data from '../../Data/Product.json';

function Cardgroup(props) {

  let data
  for (const productkey in Data) {
    const products = Data[productkey].products;
    data = products.find((e) => e.name === props.name);
    if (data) {
      break;
    }
  }

  let data1
  for (const productkey in Data) {
    const products = Data[productkey].products;
    data1 = products.find((e) => e.name === props.name1);
    if (data1) {
      break;
    }
  }

  let data2
  for (const productkey in Data) {
    const products = Data[productkey].products;
    data2 = products.find((e) => e.name === props.name2);
    if (data2) {
      break;
    }
  }

  return (
    <div className='mainCradgroup d-flex justify-content-between align-items-center mb-3'>
      <div className="lgCardHolder">
            <Productcard img={data.img[0]} name={data.name} keyfeat={data.keyfeat} category={data.cate} rentprice={data.price} />
        </div>
        <div className="smCardHolder d-flex flex-column justify-content-between align-items-end">
            <div className="w-100 d-flex justify-content-end align-items-start pb-3">
            <Smprocard img={data1.img[0]} name={data1.name} keyfeat={data1.keyfeat} category={data1.cate} rentprice={data1.price}/>
            </div>
            <Smprocard img={data2.img[0]} name={data2.name} keyfeat={data2.keyfeat} category={data2.cate} rentprice={data2.price}/>
        </div>
    </div>
  );
};

export default Cardgroup;