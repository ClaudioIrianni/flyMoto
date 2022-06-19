import { Container, Flex, Grid, GridItem, Spacer } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';

const CardList = () => {
  const allCities = [
    {
      imageURL:
        'https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg',
      name: 'Roma',
      price: 4.5,
      
      numReviews: 34,
    },
    {
      imageURL:
        'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
      name: 'Paris',
      price: 4.5,
      
      numReviews: 34,
    },
    {
      imageURL: 'https://media.timeout.com/images/105239975/image.jpg',
      name: 'Buenos Aires',
      price: 4.5,
      
      numReviews: 34,
    },
    {
      imageURL:
        'https://aldianews.com/sites/default/files/articles/montevideo_grande.jpg',
      name: 'Montevideo',
      price: 4.5,
      
      numReviews: 34,
    },
    {
      imageURL:
        'https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-rio-de-janeiro/rio-de-janeiro-panorama_YuJas-Shutterstock_2.jpg.image.694.390.low.jpg',
      name: 'Rio de Janeiro',
      price: 4.5,
      
      numReviews: 34,
    },
    {
      imageURL: 'https://cdn.getyourguide.com/img/location/5cced31b8e609.jpeg/88.jpg',
      name: 'Chile wn',
      price: 4.5,
      
      numReviews: 34,
    },
    {
      imageURL:
        'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/a5pj5ftyivd8xevbub0b',
      name: 'Londres',
      price: 4.5,
      
      numReviews: 34,
    },
    {
      imageURL:
        'https://s7g10.scene7.com/is/image/stena/20150820_berlin-brandenburg-gate:29-9?ts=1650383336641&dpr=off',
      name: 'Berlin',
      price: 4.5,
      
      numReviews: 34,
    },
  ];

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {allCities.map((city, index) => (
        <Card key={index} city={city} />
      ))}
    </Grid>
  );
};

export default CardList;
