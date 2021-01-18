import { render, screen } from '@testing-library/react';

import App from './App';
import Card from './components/Card';
import SocialNetworks from './components/SocialNetworks';

test('renders Card component', () => {
  render( <Card headerText="headerText" cardTitle="cardTitle" cardSubtitle="cardSubtitle" cardText="cardText" githubUrl="githubUrl"/>);

  const headerTextEl = screen.getByText(/headerText/i);
  expect(headerTextEl).toBeInTheDocument();

  const cardTitleEl = screen.getByText(/cardTitle/i);
  expect(cardTitleEl).toBeInTheDocument();

  const cardSubtitleEl = screen.getByText(/cardSubtitle/i);
  expect(cardSubtitleEl).toBeInTheDocument();

  const cardTextEl = screen.getByText(/cardText/i);
  expect(cardTextEl).toBeInTheDocument();
});

test('renders SocialNetworks Component', () => {
  render(<SocialNetworks />);

  const facebook = screen.getAllByAltText(/My Facebook/i);
  expect(facebook.length).toBe(1);
  expect(facebook[0]).toBeInTheDocument();

  const instagram = screen.getAllByAltText(/My Instagram/i);
  expect(instagram.length).toBe(1);
  expect(instagram[0]).toBeInTheDocument();

  const github = screen.getAllByAltText(/My Github/i);
  expect(github.length).toBe(1);
  expect(github[0]).toBeInTheDocument();

  const steam = screen.getAllByAltText(/My Steam/i);
  expect(steam.length).toBe(1);
  expect(steam[0]).toBeInTheDocument();

  const twitch = screen.getAllByAltText(/My Twitch/i);
  expect(twitch.length).toBe(1);
  expect(twitch[0]).toBeInTheDocument();

  const devto = screen.getAllByAltText(/DEV Community Profile/i);
  expect(devto.length).toBe(1);
  expect(devto[0]).toBeInTheDocument();
});

test('render App complete', () => {
  render(<App />);
  const linkElementYo = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i);
  expect(linkElementYo).toBeInTheDocument();

  const linkElementWork = screen.getByText(/accumsan pulvinar lobortis ac/i);
  expect(linkElementWork).toBeInTheDocument();

  const myPhoto = screen.getAllByAltText(/Your photo here/i);
  expect(myPhoto.length).toBe(1);
  expect(myPhoto[0]).toBeInTheDocument();

  const jsPhoto = screen.getAllByAltText(/Javascript ♥/i);
  expect(jsPhoto.length).toBe(1);
  expect(jsPhoto[0]).toBeInTheDocument();
});
