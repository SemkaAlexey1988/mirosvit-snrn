import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import classes from '../../styles/product/product.module.scss'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactImageZoom from 'react-image-zoom';

const Modal = ({ modal, items, handleModalFalse, currentIndex, featured }) => {
  return (
    <div className={classes.productImages} onClick={handleModalFalse}>
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
      error: false,
      showZoom: false,
      showSlider: true
    };

  }

  componentDidMount() {
    let mainImg = this.props.product
    let galleryImg = this.props.gallery
    let galleryArray = []
    console.log(galleryImg)
    if(galleryImg.length > 0){
      galleryImg.map((item) => {
        galleryArray.push(item.image)
        return galleryArray
      })
    }
 
    let imgList = [
      mainImg.image  
    ]
    let allItems = imgList.concat(galleryArray) 
    this.setState({ items: imgList });  
    this.setState({ featured: this.state.items[0] });
    this.setState({ items: allItems }); 
    this.setState({ isLoaded: false }); 
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 1 }
  }

  slideTo = i => console.log("clicked") || this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  toggleElementZoom = e => {
    this.setState({ showZoom: true });
    this.setState({ showSlider: false });
  }
  toggleElementSlider = e => {
    this.setState({ showZoom: false });
    this.setState({ showSlider: true });
  }

  handleModalFalse = () => {
    this.setState({ modal: false });
  };

  render() {
    let { currentIndex, items, modal, featured, isLoaded, error, showZoom, showSlider } = this.state;
    const successData = !(isLoaded || error);
    const loader = isLoaded ? <div className="load"></div> : null 
    let zoom = "Zoom";
    let widthValue = 500
    let heightValue = 500
    let zoomWidthValue = 500
  
    let offsetImg = {
      vertical: 0, 
      horizontal: 100
    }
    let content = ''
    if(this.state.items[0]){
      content = successData  ? <div className={classes.productImgZoom} onMouseLeave={this.toggleElementZoom} ref={(zoom) => this.zoom = zoom } style={showZoom ? {display:'none'} : {display:'block'}}><ReactImageZoom width={widthValue} height={heightValue} offset={offsetImg} zoomWidth={zoomWidthValue} img={this.state.items[currentIndex]}></ReactImageZoom></div> : ''
    }
    return (
      <>
      {loader}
      {content}
      <div onMouseEnter={this.toggleElementSlider} className={classes.productImgSlider} style={showSlider ? {display:'none'} : {display:'block'}}>
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
