import React from 'react';
import './Cardgroup.css';
import Productcard from '../Productcardgo/Productcard.jsx';
import Smprocard from '../Smprocard/Smprocard';
import Data from '../../Data/Product.json';

function Cardgroup(props) {

  const allpro = [];

  const data = Object.entries(Data);
  data.forEach(cate => {
    const products = Data[cate[0]].products;
    products.forEach(product => {
      allpro.push(product);
    });
  });

  const chosen = allpro.slice((3 * props.num) - 3, 3 * props.num);

  return (
    <div className='mainCradgroup d-flex justify-content-between align-items-center mb-3'>
        <div className="lgCardHolder">
            <Productcard img={chosen[0].img[0]} name={chosen[0].name} keyfeat={chosen[0].keyfeat} category={chosen[0].cate} rentprice={chosen[0].price} />
        </div>
        <div className="smCardHolder d-flex flex-column justify-content-between align-items-end">
            <div className="w-100 d-flex justify-content-end align-items-start pb-3">
            <Smprocard img={chosen[1].img[0]} name={chosen[1].name} keyfeat={chosen[1].keyfeat} category={chosen[1].cate} rentprice={chosen[1].price}/>
            </div>
            <Smprocard img={chosen[2].img[0]} name={chosen[2].name} keyfeat={chosen[2].keyfeat} category={chosen[2].cate} rentprice={chosen[2].price}/>
        </div>
    </div>
  );
};

export default Cardgroup;