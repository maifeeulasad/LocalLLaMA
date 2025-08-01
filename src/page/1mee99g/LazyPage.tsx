import React, { lazy, Suspense } from 'react';

const Page1mee99g = lazy(() => import('./Page'));

const LazyPage1mee99g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mee99g />
  </Suspense>
);

export { LazyPage1mee99g };
