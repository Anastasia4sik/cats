import React from 'react';
import { Cat } from '../../types/Cat';

type Props = {
  cat: Cat;
};

export const BlockItem: React.FC<Props> = ({ cat }) => {
  return (
    <div className="blockItem">
      <div className="blockItem__photo">
        <img
          src={cat.img}
          alt=""
          className="blockItem__photo__img"
        />
      </div>

      <div className="blockItem__content">
        <h2 className="blockItem__content__title">
          {cat.name}
        </h2>

        <p className="blockItem__content__desc">
          {`Say hello to a sweet ${cat.breed} cat. ${cat.sex === 'f' ? 'She' : 'He'} was born in ${cat.born} and loves to ${cat.hobby}.`}
        </p>
      </div>
    </div>
  );
};
