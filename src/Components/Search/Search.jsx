import React, { useState, useEffect, useRef } from 'react';
import style from './Search.module.css'
import { connect } from 'react-redux'
import { fetchPhotos } from '../../Redux/actions'

const Search = (props) => {

    const inputElement = useRef(null);

    const handleSeach = () => {
        console.log("inputElement.value",inputElement.current.value);
        
        props.fetchPhotos(inputElement.current.value);
    }

    return (
        <div className={style.Search }>
            <input
            ref ={inputElement}></input>
            <button onClick={()=>{handleSeach()}}>search</button>
        </div >
    )
}

const mapStateToProps = state => ({
    searchTag: state.mainReducer.searchTag
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhotos: (tags) => dispatch(fetchPhotos({ page: 1, tags})),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);