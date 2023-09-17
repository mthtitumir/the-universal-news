import { AllBooks } from './AllBooks';
import { render, screen } from '@testing-library/react';

describe('AllBooks component', () => {
  test('should render the correct number of books', () => {
    render(<AllBooks />);

    const books = screen.getAllByTestId('book');

    expect(books.length).toBe(10);
  });

  test('should render the SingleBooks component for each book in the data', () => {
    render(<AllBooks />);

    const singleBooks = screen.getAllByTestId('single-book');

    expect(singleBooks.length).toBe(10);
  });

  test('should pass the book data to the SingleBooks component', () => {
    const mockBookData = {
      id: 1,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: 'Fantasy',
      price: 9.99,
    };

    render(<AllBooks booksData={[mockBookData]} />);

    const singleBook = screen.getByTestId('single-book');

    expect(singleBook).toHaveTextContent('The Hobbit');
    expect(singleBook).toHaveTextContent('J.R.R. Tolkien');
    expect(singleBook).toHaveTextContent('Fantasy');
    expect(singleBook).toHaveTextContent('$9.99');
  });
});
