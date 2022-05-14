import React from 'react';

const InfoCard = ({img,cardTitle,bdColor,cardDes}) => {
    return (
        <div class={`card lg:card-side  shadow-xl p-2 ${bdColor}`}>
        <figure><img src={img} alt="Album"/></figure>
        <div class="card-body text-white">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{cardDes}</p>
      
        </div>
      </div>
    );
};

export default InfoCard;