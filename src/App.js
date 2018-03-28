import React, { Component } from 'react';
import './App.css';

var _ = require('lodash');

const image_list = ["_M2A6799.JPG","_M2A6831.JPG","_M2A6861.JPG","_M2A6898.JPG","_M2A6800.JPG","_M2A6832.JPG","_M2A6862.JPG","_M2A6899.JPG","_M2A6801.JPG","_M2A6833.JPG","_M2A6863.JPG","_M2A6900.JPG","_M2A6802.JPG","_M2A6834.JPG","_M2A6864.JPG","_M2A6901.JPG","_M2A6803.JPG","_M2A6835.JPG","_M2A6865.JPG","_M2A6902.JPG","_M2A6774.JPG","_M2A6804.JPG","_M2A6836.JPG","_M2A6866.JPG","_M2A6903.JPG","_M2A6775.JPG","_M2A6805.JPG","_M2A6837.JPG","_M2A6867.JPG","_M2A6904.JPG","_M2A6776.JPG","_M2A6806.JPG","_M2A6838.JPG","_M2A6868.JPG","_M2A6905.JPG","_M2A6777.JPG","_M2A6807.JPG","_M2A6840.JPG","_M2A6869.JPG","_M2A6906.JPG","_M2A6778.JPG","_M2A6808.JPG","_M2A6841.JPG","_M2A6870.JPG","_M2A6907.JPG","_M2A6779.JPG","_M2A6809.JPG","_M2A6842.JPG","_M2A6871.JPG","_M2A6908.JPG","_M2A6780.JPG","_M2A6810.JPG","_M2A6843.JPG","_M2A6872.JPG","_M2A6909.JPG","_M2A6781.JPG","_M2A6811.JPG","_M2A6844.JPG","_M2A6873.JPG","_M2A6910.JPG","_M2A6782.JPG","_M2A6813.JPG","_M2A6845.JPG","_M2A6874.JPG","_M2A6911.JPG","_M2A6783.JPG","_M2A6814.JPG","_M2A6846.JPG","_M2A6875.JPG","_M2A6912.JPG","_M2A6784.JPG","_M2A6817.JPG","_M2A6847.JPG","_M2A6876.JPG","_M2A6913.JPG","_M2A6786.JPG","_M2A6818.JPG","_M2A6848.JPG","_M2A6881.JPG","_M2A6914.JPG","_M2A6787.JPG","_M2A6819.JPG","_M2A6849.JPG","_M2A6882.JPG","_M2A6915.JPG","_M2A6788.JPG","_M2A6820.JPG","_M2A6850.JPG","_M2A6884.JPG","_M2A6916.JPG","_M2A6789.JPG","_M2A6821.JPG","_M2A6851.JPG","_M2A6885.JPG","_M2A6917.JPG","_M2A6790.JPG","_M2A6822.JPG","_M2A6852.JPG","_M2A6886.JPG","_M2A6918.JPG","_M2A6791.JPG","_M2A6823.JPG","_M2A6853.JPG","_M2A6887.JPG","_M2A6919.JPG","_M2A6792.JPG","_M2A6824.JPG","_M2A6854.JPG","_M2A6888.JPG","_M2A6920.JPG","_M2A6793.JPG","_M2A6825.JPG","_M2A6855.JPG","_M2A6889.JPG","_M2A6921.JPG","_M2A6794.JPG","_M2A6826.JPG","_M2A6856.JPG","_M2A6890.JPG","_M2A6922.JPG","_M2A6795.JPG","_M2A6827.JPG","_M2A6857.JPG","_M2A6891.JPG","_M2A6923.JPG","_M2A6796.JPG","_M2A6828.JPG","_M2A6858.JPG","_M2A6892.JPG","_M2A6797.JPG","_M2A6859.JPG","_M2A6895.JPG","_M2A6798.JPG","_M2A6830.JPG","_M2A6860.JPG","_M2A6897.JPG"];

const alt_image_list = ["_M2A6779.JPG", "_M2A6874.JPG", "_M2A6898.JPG", "_M2A6847.JPG", "_M2A6911.JPG", "_M2A6848.JPG", "_M2A6823.JPG", "_M2A6886.JPG", "_M2A6813.JPG", "_M2A6777.JPG", "_M2A6858.JPG", "_M2A6787.JPG", "_M2A6782.JPG"];
const titles = [
  "The Cashmere Watchcap",
  "The Poncho",
  "The Fingerless Gloves",
  "The Andes Hat",
  "The V-Neck Sweater",
  "The Performance Hat",
  "The Infinity Scarf",
]

const prices = [
  "$150",
  "$200",
  "$250",
  "$300",
  "$350"
]
const menu_items = [
  "All Products",
  "Head",
  "Neck",
  "Hands+Feet",
  "Body",
  "Baby+Kiddo",
  "Sale",
  "About"
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading:false
    }
    this.listfiles = this.listfiles.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.remove = this.remove.bind(this);
    this.reload = this.reload.bind(this);
  }
  reload() {
    this.setState({
      images: _.sampleSize(image_list,48)
    })
  }
  listfiles() {
    image_list.map((image,index)=>{
      console.log(image);
      return <div>jason</div>;
    })
  }
  shuffle() {
    var oldState = this.state.images
    var newState = _.shuffle(oldState)
    this.setState({
      images: newState
    })
  }
  remove(item) {

    var oldState = this.state.images
    var newState= _.without(oldState,item)
    this.setState({
      images: newState
    })

  }

  render() {
    console.log(this.state.images);
    return (
      <div className="App">
          <div style={styles.header}>
          <img src="/logo/go.png" />
          <ul style={styles.menu}>
            {menu_items.map((item,index)=>(
              <li style={styles.menu_item} key={index}>{item}</li>
            ))}
          </ul>
          </div>
          <div style={styles.image_container}>
            <div style={styles.fix}>
              <div style={styles.shuffle_button} onClick={()=>{this.shuffle()}}>S</div>
              <div style={styles.shuffle_button} onClick={()=>{this.reload()}}>R</div>
            </div>
            <div style={styles.container}>
            {this.state.images.map((image,index)=>(
              <div key={index} style={styles.item}>
                <img style={styles.image} src={"/images/" + image}/>
                <div style={styles.inside} onClick={()=>{this.remove(image)}}></div>
                <div style={styles.title}>{_.sample(titles)}</div>
                <div style={styles.price}>{_.sample(prices)}</div>
              </div>
            ))}
            </div>
          </div>
      </div>
    );
  }
  componentWillMount() {
    console.log('mount');
    this.setState({
      images: _.sampleSize(image_list, 48)
    })
  }
}
const styles= {
  container: {
    width:'100%',
    maxWidth:'1200px',

    margin:'auto',
    padding:'0px',
  },
  item:{
    width:'23%',
    margin:'1%',
    display:'inline-block',
    position:'relative',
  },
  inside: {
    position:'absolute',
    top:'10px',
    left:'10px',
    cursor:'pointer',
    background:'#ff9eb6',
    width:'16px',
    height:'16px',
    borderRadius:'8px',
    opacity:'.2'
  },
  image: {width:'100%'},
  shuffle_button :{
    width:'44px',
    height:'44px',
    borderRadius:'22px',
    background:'#72adc3',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    cursor:'pointer',
    marginBottom:'4px'
  },
  fix: {
    position:'fixed',
    bottom:'5px',
    left:'5px',

  },
  title: {
    fontWeight:'200',
    fontStyle:'italic'
  },
  price: {
    marginBottom:'25px'
  },
  header:{
    position:'fixed',
    top:'0px',
    textAlign:'center',
    width:'100%',
    height:'140px',
    borderBottom:'1px solid #dedede',
    zIndex:'9999',
    background:'white'
  },
  image_container : {
    marginTop:'150px'
  },
  menu : {
    listStyle:'none',
    padding:'0',
    margin:'0',
  },
  menu_item:{
    display:'inline-block',
    marginLeft:'28px',
    textTransform:'uppercase',
    fontSize:'14px',
    fontWeight:'bold',
    letterSpacing:'1px'
  }
}
export default App;
