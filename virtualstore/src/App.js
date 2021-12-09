import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import { connect } from 'react-redux';
import Box from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { selectCategory } from './components/reducers/categories';


function App(props) {
  return (
    <div className='App'>
    <Header>
      
    </Header>
      <Grid container spacing={8} 
            justifyContent='center'
            sx={{margin:'250px 0px 0px 0px'}}>

      {props.count.products.map((product, idx) => {
        return (
          <Grid item key={idx}>
          <Box sx={{width: 350, 
                    height:250, 
                    background:'#0097a7', 
                    outline:'solid'
                  }}>
            <h3>{product.name}</h3>

            <p>Number Available: {product.count}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

          <Button sx={{background:'#1de9b6', 
                       color:'black'}}
                  variant='outlined'
                  onClick={() => {
              props.decrement(product.count);
              console.log(props.decrement(product.count))
            }}> Place Item in Cart
          </Button>
          </Box>
          </Grid>
        );
      })}
      </Grid>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count,
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => ({
  decrement: (count) => dispatch({ type: 'DECREMENT', payload: count }),
  selectCategory: (category) => dispatch(selectCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);