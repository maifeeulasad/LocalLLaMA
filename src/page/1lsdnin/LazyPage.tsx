import React, { lazy, Suspense } from 'react';

const Page1lsdnin = lazy(() => import('./Page'));

const LazyPage1lsdnin = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsdnin />
  </Suspense>
);

export { LazyPage1lsdnin };
