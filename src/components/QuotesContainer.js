import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Carousel,
  CarouselControl,
  CarouselItem
} from 'reactstrap';
import shortId from 'shortid';

import '../styles/components/Quotes.css';

class QuotesContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const { quotes } = this.props;
    const nextIndex = this.state.activeIndex === quotes.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const { quotes } = this.props;
    const nextIndex = this.state.activeIndex === 0 ? quotes.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { quotes } = this.props;
    const quoteItems = Object.keys(quotes).map(quoteId => {
      const quote = quotes[quoteId];
      return (
        <CarouselItem
          onExiting={ this.onExiting }
          onExited={ this.onExited }
          key={ shortId.generate() }
        >
          <blockquote className='blockquote text-center'>
            <p className='mb-0'>{ quote.text }</p>
            <footer className='blockquote-footer'>
              <cite title='Source Title'>{ quote.cite }</cite>
            </footer>
          </blockquote>
        </CarouselItem>
      );
    });
    return (
      <div className='Quotes'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          { quoteItems }
          <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
          <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { quotes } = state;
  return {
    quotes
  };
};

export default connect(mapStateToProps)(QuotesContainer);