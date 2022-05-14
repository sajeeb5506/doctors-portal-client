import React from 'react';

const InfoCard = ({img,cardTitle,bdColor,cardDes}) => {
    return (
        <div className={`card lg:card-side  shadow-xl p-2 ${bdColor}`}>
        <figure><img src={img} alt="Album"/></figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardDes}</p>
      
        </div>
      </div>
    );
};

export default InfoCard;