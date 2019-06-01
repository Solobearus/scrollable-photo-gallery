import React, { useEffect } from 'react';
import style from './Gallery.module.css'
import { connect } from 'react-redux'
import { fetchPhotos, open_modal } from '../../Redux/actions'
// import Photo from '../Photo/Photo.jsx'
import InfiniteScroll from "react-infinite-scroll-component";
import Modal from '../Modal/Modal';
import Search from '../Search/Search';

const Gallery = (props) => {

    useEffect(() => {
    }, [])

    const createUrl = (photo) => {
        const farmid = photo.farm;
        const serverid = photo.server;
        const photoid = photo.id;
        const secret = photo.secret;
        const size = "q";

        return `https://farm${farmid}.staticflickr.com/${serverid}/${photoid}_${secret}_${size}.jpg`;
    }

    return (
        <div className={style.Gallery}>

            <Search></Search>
            {props.ShowModal ? <Modal></Modal> : null}

            <InfiniteScroll
                className={style.InfiniteScroll}
                dataLength={props.photos.length}
                next={() => { props.fetchPhotos({page: props.page, tags :props.searchTag}) }}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {props.photos.map((photo, index) => (
                    <img
                        key={photo.id}
                        src={createUrl(photo)}
                        onClick={() => props.open_modal(index)}
                        alt='couldnt load'>
                    </img>
                ))}
            </InfiniteScroll>
        </div >
    )
}

const mapStateToProps = state => ({
    searchTag: state.mainReducer.searchTag,
    photos: state.mainReducer.photos,
    ShowModal: state.mainReducer.ShowModal,
    page: state.mainReducer.page,
});

const mapDispatchToProps = (dispatch) => {
    return {
        open_modal: (payload) => dispatch(open_modal(payload)),
        fetchPhotos: (payload) => dispatch(fetchPhotos(payload)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);