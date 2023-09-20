import { SwiperSection } from './SwiperSection';
import { render, screen } from '@testing-library/react';

describe('SwiperSection component', () => {
  test('should render the Swiper component', () => {
    render(<SwiperSection />);

    const swiperComponent = screen.getByTestId('swiper');

    expect(swiperComponent).toBeInTheDocument();
  });

  test('should render the correct number of Swiper slides', () => {
    render(<SwiperSection />);

    const swiperSlides = screen.getAllByTestId('swiper-slide');

    expect(swiperSlides.length).toBe(4);
  });

  test('should render the images in the Swiper slides', () => {
    render(<SwiperSection />);

    const swiperImages = screen.getAllByAltText('book image');

    expect(swiperImages.length).toBe(4);
  });

  test('should change the active slide when the user clicks on the navigation buttons', () => {
    render(<SwiperSection />);

    const nextButton = screen.getByTestId('swiper-button-next');
    const previousButton = screen.getByTestId('swiper-button-prev');

    // Click on the next button
    nextButton.click();

    // Expect the active slide to be the second slide
    let activeSlide = screen.getByTestId('swiper-slide-active');
    expect(activeSlide).toBeInTheDocument();

    // Click on the previous button
    previousButton.click();

    // Expect the active slide to be the first slide
    activeSlide = screen.getByTestId('swiper-slide-active');
    expect(activeSlide).toBeInTheDocument();
  });
});
