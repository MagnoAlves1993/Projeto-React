import React, { Component } from 'react'

const SearchMovies = (props) => {
    const { onSubmitInfo, onChangeInfo, values } = props
        return (
            <form onSubmit={onSubmitInfo} className="search-form">
                <input type="text" value={values} name="search" placeholder="Procure seu Filme(Exemplo: Homem Aranha)" onChange={onChangeInfo} required />
                <button><i className="far fa-search" style={{color: "white"}}></i></button>
            </form>
        )
}

export default SearchMovies