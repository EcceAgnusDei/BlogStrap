import React from 'react';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

afterEach(cleanup);

describe('Test the navigation', () => {

	it('should start with home page', () => {
		const { getByTestId } = render(<Provider store={store}>
										<Router>
											<App/>
										</Router>
									</Provider>);
		expect(getByTestId('title').textContent).toBe('Home');
	})

	it('should go to users page', () => {
		const  { getByTestId, getByText} = render(<Provider store={store}>
													<Router>
														<App/>
													</Router>
												</Provider>);
		fireEvent.click(getByText('Users'));
		expect(getByTestId('title').textContent).toBe('Users');
	})

	it('should go to posts page', () => {
		const  { getByTestId, getByText } = render(<Provider store={store}>
																<Router>
																	<App/>
																</Router>
															</Provider>);
		fireEvent.click(getByText('Posts'));
		expect(getByTestId('title').textContent).toBe('Last post');
	})

	it('should return to home page', () => {
		const  { getByTestId, getByText } = render(<Provider store={store}>
																<Router>
																	<App/>
																</Router>
															</Provider>);
		fireEvent.click(getByText('Home'));
		expect(getByTestId('title').textContent).toBe('Home');
	})
})