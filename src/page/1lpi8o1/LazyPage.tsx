import React, { lazy, Suspense } from 'react';

const Page1lpi8o1 = lazy(() => import('./Page'));

const LazyPage1lpi8o1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpi8o1 />
  </Suspense>
);

export { LazyPage1lpi8o1 };
