import React, { useState, useEffect } from 'react';
import style from './Modal.module.css'
import { connect } from 'react-redux'
import { prev_photo, next_photo, close_modal } from '../../Redux/actions'
import LazyLoad from 'react-lazy-load';
import spinner from '../../Images/spinner.svg';

const Modal = (props) => {

    const [loaded, setloaded] = useState(false);
    
    const createUrl = (photo, size = "q") => {

        const farmid = photo.farm;
        const serverid = photo.server;
        const photoid = photo.id;
        const secret = photo.secret;

        return `https://farm${farmid}.staticflickr.com/${serverid}/${photoid}_${secret}_${size}.jpg`;
    }

    let spinner_classes = style.display;
    let current_classes = style.displayNone;

    if (loaded) {
        console.log("loaded");
        spinner_classes = style.displayNone;
        current_classes = style.display;
    }

    return (
        <React.Fragment>
            <div
                className={style.Modal}
                onClick={() => { props.close_modal() }}
            >
                {props.currentImg > 0 ?
                    <img
                        src={createUrl(props.photos[props.currentImg - 1])}
                        onClick={(e) => {
                            setloaded(false);
                            e.stopPropagation();
                            props.prev_photo()
                        }}
                        alt='couldnt load'>
                    </img>
                    : null}
                <div>
                    <img
                        className={spinner_classes}
                        src={spinner}
                        alt='spinner'>
                    </img>
                    <LazyLoad>
                        <img
                            className={current_classes}
                            src={createUrl(props.photos[props.currentImg], "c")}
                            onLoad={() => {
                                setloaded(true);
                            }}
                            alt='couldnt load'>
                        </img>
                    </LazyLoad>
                </div>
                {
                    props.currentImg < props.photos.length - 1 ?
                        <img src={createUrl(props.photos[props.currentImg + 1])}
                            onClick={(e) => {
                                setloaded(false);
                                props.next_photo();
                                e.stopPropagation();
                            }}
                            alt='couldnt load'>
                        </img>
                        : null
                }
            </div >
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    ShowModal: state.mainReducer.ShowModal,
    photos: state.mainReducer.photos,
    currentImg: state.mainReducer.currentImg,
});

const mapDispatchToProps = (dispatch) => {
    return {
        close_modal: () => dispatch(close_modal()),
        next_photo: (payload) => dispatch(next_photo(payload)),
        prev_photo: (payload) => dispatch(prev_photo(payload)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);