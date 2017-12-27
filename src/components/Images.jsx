import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/1600x1200',
    srcSet: [
      'https://source.unsplash.com/2ShvY8Lf6l0/500x375 500w',
      'https://source.unsplash.com/2ShvY8Lf6l0/800x600 800w',
      'https://source.unsplash.com/2ShvY8Lf6l0/1024x768 1024w',
      'https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/1600x1600',
    srcSet: [
      'https://source.unsplash.com/Dm-qxdynoEc/500x500 500w',
      'https://source.unsplash.com/Dm-qxdynoEc/800x800 800w',
      'https://source.unsplash.com/Dm-qxdynoEc/1024x1024 1024w',
      'https://source.unsplash.com/Dm-qxdynoEc/1600x1600 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/1200x1600',
    srcSet: [
      'https://source.unsplash.com/qDkso9nvCg0/375x500 375w',
      'https://source.unsplash.com/qDkso9nvCg0/600x800 600w',
      'https://source.unsplash.com/qDkso9nvCg0/768x1024 768w',
      'https://source.unsplash.com/qDkso9nvCg0/1200x1600 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/1200x1600',
    srcSet: [
      'https://source.unsplash.com/iecJiKe_RNg/375x500 375w',
      'https://source.unsplash.com/iecJiKe_RNg/600x800 600w',
      'https://source.unsplash.com/iecJiKe_RNg/768x1024 768w',
      'https://source.unsplash.com/iecJiKe_RNg/1200x1600 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/1200x1600',
    srcSet: [
      'https://source.unsplash.com/epcsn8Ed8kY/375x500 375w',
      'https://source.unsplash.com/epcsn8Ed8kY/600x800 600w',
      'https://source.unsplash.com/epcsn8Ed8kY/768x1024 768w',
      'https://source.unsplash.com/epcsn8Ed8kY/1200x1600 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/1600x1200',
    srcSet: [
      'https://source.unsplash.com/NQSWvyVRIJk/500x375 500w',
      'https://source.unsplash.com/NQSWvyVRIJk/800x600 800w',
      'https://source.unsplash.com/NQSWvyVRIJk/1024x768 1024w',
      'https://source.unsplash.com/NQSWvyVRIJk/1600x1200 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/1200x1600',
    srcSet: [
      'https://source.unsplash.com/zh7GEuORbUw/375x500 375w',
      'https://source.unsplash.com/zh7GEuORbUw/600x800 600w',
      'https://source.unsplash.com/zh7GEuORbUw/768x1024 768w',
      'https://source.unsplash.com/zh7GEuORbUw/1200x1600 1200w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 3,
    height: 4
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/1600x1200',
    srcSet: [
      'https://source.unsplash.com/PpOHJezOalU/500x375 500w',
      'https://source.unsplash.com/PpOHJezOalU/800x600 800w',
      'https://source.unsplash.com/PpOHJezOalU/1024x768 1024w',
      'https://source.unsplash.com/PpOHJezOalU/1600x1200 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/1600x1200',
    srcSet: [
      'https://source.unsplash.com/I1ASdgphUH4/500x375 500w',
      'https://source.unsplash.com/I1ASdgphUH4/800x600 800w',
      'https://source.unsplash.com/I1ASdgphUH4/1024x768 1024w',
      'https://source.unsplash.com/I1ASdgphUH4/1600x1200 1600w'
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 4,
    height: 3
  }
];

class Images extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Images