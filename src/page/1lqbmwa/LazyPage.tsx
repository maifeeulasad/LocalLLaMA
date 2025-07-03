import React, { lazy, Suspense } from 'react';

const Page1lqbmwa = lazy(() => import('./Page'));

const LazyPage1lqbmwa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqbmwa />
  </Suspense>
);

export { LazyPage1lqbmwa };
