import React, { Component }  from 'react';
// import PropTypes from 'prop-types';

import { Wrapper, Content}  from './SearchBar.styles';

import  searchIcon from '../../images/search-icon.svg';

class SearchBar extends Component {
    state = { value: '' };
    timeout  = null;

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.value !== prevState.value){
            const {setSearchTerm } =this.props;

            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                const { value } = this.state;
                setSearchTerm(value);
            }, 500);
        }
    }

    render() {
        return(
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt='search-icon' />
                    <input 
                        type='text' 
                        placeholder='Search Movie' 
                        onChange={event => this.setState({ value: event.currentTarget.value})}
                        value={this.state.value}
                    />
                </Content>
            </Wrapper>
        
        )
    }



};

export default SearchBar ;


//Using Hooks below
///////////////////////////////

// import React, { useState, useEffect, useRef }  from 'react';
// // import PropTypes from 'prop-types';

// import { Wrapper, Content}  from './SearchBar.styles';

// import  searchIcon from '../../images/search-icon.svg';

// const  SearchBar = ({setSearchTerm})=> {
//     const [state, setState] = useState('');
//     const initial = useRef(true);

//     useEffect(() => {
//         if (initial.current){
//             initial.current=false;
//             return;
//         }

//         const timer = setTimeout(() => {
//             setSearchTerm(state);
//         }, 500);

//         return () => {clearTimeout(timer)};
//     }, [setSearchTerm, state])


//     return(
//         <Wrapper>
//             <Content>
//                 <img src={searchIcon} alt='search-icon' />
//                 <input 
//                     type='text' 
//                     placeholder='Search Movie' 
//                     onChange={event => setState(event.currentTarget.value)}
//                     value={state}
//                 />
//             </Content>
//         </Wrapper>
    
//     )

// };

// export default SearchBar ;