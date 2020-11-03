import React, {Component} from 'react'
import SearchMovies from '../components/SearchMovies'
import Listing from '../components/Listing'
import '../styles/Home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isSubmit: false,
            heightSet: 0
        };
        this.updateDimensions = this.updateDimensions.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const { onSearchMovie } = this.props
        this.setState({isSubmit: true})
        onSearchMovie(this.state.value)
        event.preventDefault();
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('scroll', this.updateDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateDimensions);
    }
    
    updateDimensions() {
        const { onSearchMovie } = this.props
        this.setState({ heightSet: window.scrollY });
        if(this.state.heightSet > 36){
            onSearchMovie(this.state.value)
        }
    }
    
    
    render(){
        const { movies } = this.props
        return (
            <div className="home">
                <div className={`containers-search ${this.state.isSubmit ? "clicked-container" : ""}`}>
                    <h1><span className="title-project">B2<span className={`title-w ${this.state.isSubmit? "clicked-letter" : ""}`}>W</span></span>ovie</h1>
                    <SearchMovies onSubmitInfo={this.handleSubmit} onChangeInfo={this.handleChange} values={this.state.value}/>
                </div> 
                {this.state.isSubmit && movies !== undefined  ? (
                    <>
                        <Listing movies={movies} onScroll={this.handleScroll}/>
                        <div>Scrolle para baixo para mais</div>
                    </>
                    ): this.state.isSubmit ?  ( <div style={{textAlign: 'center', color:'red'}}>Nenhum resultado encontrado</div>)
                    :('')
                }
            </div>
            
        )
    }
}
