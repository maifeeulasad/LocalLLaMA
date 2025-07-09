import React, { lazy, Suspense } from 'react';

const Page1luxu6s = lazy(() => import('./Page'));

const LazyPage1luxu6s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luxu6s />
  </Suspense>
);

export { LazyPage1luxu6s };
