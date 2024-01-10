import React from 'react';
import { useSelector } from 'react-redux';

const LikeItem = ({item}) => {
    const { id, name, title, likes, category,tumImg,proImg} = item
    const { gallery1, gallery2 } = useSelector( state => state.galleryR )
    return (
        <li>
            <img src={gallery1[id-1].largeImageURL } alt="" />
            <div>
                <img src={gallery2[id-1].largeImageURL} alt="" />
                <p>{title}</p>
            </div>
        </li>
    );
};

export default LikeItem;