import React from 'react';
import './Cardgroup.css';
import Productcard from '../Productcardgo/Productcard.jsx';
import Smprocard from '../Smprocard/Smprocard';
// import Data from '../../Data/Products.json';

function Cardgroup() {

  // const data = Object.entries(Data.products);
  // const data1 = data[0][1][props.index];
  // const data2 = data[1][1][props.index];
  // const data3 = data[2][1][props.index];

  return (
    <div className='mainCradgroup d-flex justify-content-between align-items-center mb-3'>
        <div className="lgCardHolder">
            <Productcard img="../proimg/MIST FAN BLACK - 1.png" name='mist fan black' keyfeat={`5 ft`} subcategory={`mist fam`} category={`mist fan`} rentprice={`$99`} rentperiod={`month`} />
        </div>
        <div className="smCardHolder d-flex flex-column justify-content-between align-items-end">
            <div className="w-100 d-flex justify-content-end align-items-start pb-3">
            <Smprocard img={`../proimg/MIST FAN BLACK - 1.png`} name={`mist fan`} category={`mist fan`} rentprice={`$99`} rentperiod={`day`}/>
            </div>
            <Smprocard img={`../proimg/MIST FAN BLACK - 1.png`} name={`mist fan`} category={`mist fan`} rentprice={`$99`} rentperiod={`day`}/>
        </div>
    </div>
  );
};

export default Cardgroup;