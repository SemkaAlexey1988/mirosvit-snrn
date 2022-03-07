import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import classes from '../../styles/product/product.module.scss'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactImageZoom from 'react-image-zoom';

//const props = {width: 400, height: 250, zoomWidth: 500, img: "http://malaman.github.io/react-image-zoom/example/1.jpg"};

const Modal = ({ modal, items, handleModalFalse, currentIndex, featured }) => {
  return (
    <div className={classes.productImages} onClick={handleModalFalse}>
      {/* this only features the first image */}
      {/* <img src={featured} /> */}
      {/* shows every image on modal*/}
      <div className={classes.productImages}>
        <img src={items[currentIndex]} />
      </div>
    </div>
  );
};

class ProductImages extends React.Component {

  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      items: [],
      modal: false,
      featured: '',
      isLoaded: true,
      error: false
    };

  }

  componentDidMount() {
    let mainImg = this.props.product
    console.log(mainImg.image)
    let imgList = [
      mainImg.image,
      "/assets/images/htc_touch_hd_2.jpg",
      "/assets/images/samsung_tab_2.jpg",
      "/assets/images/sony_vaio_4.jpg"  
      ]
    this.setState({ items: imgList });  
    this.setState({ featured: this.state.items[0] });
    this.setState({ items: imgList }); 
    this.setState({ isLoaded: false }); 
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 1 }
  };

  slideTo = i => console.log("clicked") || this.setState({ currentIndex: i });

  // Do I need this method at all?
  onSlideChanged = e => this.setState({ currentIndex: e.item });

  toggleElement = e => {
    alert('11')
  }

  handleModalFalse = () => {
    this.setState({ modal: false });
  };

  render() {
    let { currentIndex, items, modal, featured, isLoaded, error } = this.state;
    const successData = !(isLoaded || error);
    const loader = isLoaded ? <div className="load"></div> : null 
    let st = "http://malaman.github.io/react-image-zoom/example/1.jpg"
  
    let offsetImg = {
      vertical: 0, 
      horizontal: 0
    }
    let content = ''
    if(this.state.items[0]){
      content = successData  ? <div onMouseEnter={this.toggleElement}><ReactImageZoom width="500" height="500" offset={offsetImg} zoomWidth="500" img={this.state.items[0]}></ReactImageZoom></div> : ''
    }
    return (
      <>
      {loader}
      {content}
      <div onMouseEnter={this.toggleElement}>
        <Modal
          modal={this.state.modal}
          items={this.state.items}
          handleModalFalse={this.handleModalFalse}
          currentIndex={this.state.currentIndex}
          featured={this.state.featured}
        />

      </div>

     
        <RenderThumbs
          items={this.state.items}
          slideNext={this.slideNext}
          slidePrev={this.slidePrev}
          slideTo={this.slideTo}
          responsive={this.responsive}
        /> 
      </>
    );
  }
}

const RenderGallery = ({ currentIndex, items, onSlideChanged, responsive }) => {
  return (
    <React.Fragment>
     
    <AliceCarousel
      dotsDisabled={false}
      buttonsDisabled={true}
      slideToIndex={currentIndex}
      onSlideChanged={onSlideChanged}
      responsive={responsive}
    >
      {items.map((item, i) => (
        <div key={i} className={classes.productImages}>
          <img src={item} />
        </div>
      ))}
    </AliceCarousel>

</React.Fragment>
    
  );
};

// Thumbnails
const RenderThumbs = ({ items, slideNext, slidePrev, slideTo }) => (
  <div>
  <ul className={classes.productThumbList}>
    {items.map((item, i) => (
      <li className={classes.productThumb} key={i} onClick={() => slideTo(i)}>
          <img src={item} />
      </li>
    ))}
  </ul>

      </div>
);

export default ProductImages;
