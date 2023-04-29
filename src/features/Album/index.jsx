import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Flow Này Mượt Phết",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/4/a/5/a4a5f7d375e373d2856aa75185e5a615.jpg"
        },
        {
            id: 2,
            name: "Điệu Lofi Thân Quen",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/3/c/8/53c8e5053f0ec4b5a2bed26c37a27c73.jpg"
        },
        {
            id: 3,
            name: "Chill Hits",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg"
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;