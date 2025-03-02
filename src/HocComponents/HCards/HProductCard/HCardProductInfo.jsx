import React from 'react';
import { CardProductInformation } from '../Cards.styled';
import HCoinLabel from '../../HCoinLabel/HCoinLabel';

function truncateText(text) {
   if (text?.length > 40) {
      return text?.substring(0, 40) + '...';
   }
   return text;
}

const formatDate = (date) => {
   date = new Date(date); // Convierte la fecha a objeto Date
   const day = ('0' + date.getDate()).slice(-2); // Asegura dos dígitos para el día
   const month = ('0' + (date.getMonth() + 1)).slice(-2); // Meses son de 0-11, añade 1 y asegura dos dígitos
   const year = date.getFullYear(); // Año completo
   return day + '/' + month + '/' + year; // Concatena en formato dd/mm/yyyy
};

const HCardProductInfo = ({
   title,
   ownerFront,
   purchaseDate,
   colorStyle,
   purchaseSize,
   purchasePrimer,
   purchasePrice,
}) => {
   const getElapsedTime = (timestamp) => {
      const now = Date.now();
      const elapsed = now - timestamp;

      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
         (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));

      return { days, formatted: `${days}d ${hours}h ${minutes}m` };
   };

   const getColorByElapsedTime = (days) => {
      if (days <= 2) return 'green';
      if (days <= 5) return 'orange';
      return 'red';
   };

   return (
      <CardProductInformation>
         <h3>{truncateText(title)}</h3>
         <p>Owner: {ownerFront}</p>
         <p>
            Elapsed time:
            <span
               style={{
                  color: getColorByElapsedTime(
                     getElapsedTime(purchaseDate).days
                  ),
                  fontSize: '18px',
               }}>
               {' '}
               {getElapsedTime(purchaseDate).formatted}
            </span>
         </p>
         <div className='extraInfo'>
            <div className='color'>
               <p>Color</p>
               <div style={colorStyle}></div>
            </div>
            <div className='size'>
               <p>Size</p>
               <div>{purchaseSize} </div>
            </div>
            <div>
               <p>Primer</p>
               <p>{purchasePrimer === true ? 'YES' : 'NO'}</p>
            </div>
            <HCoinLabel value={purchasePrice} />
         </div>
      </CardProductInformation>
   );
};

export default HCardProductInfo;
