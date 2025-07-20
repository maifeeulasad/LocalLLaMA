import React, { lazy, Suspense } from 'react';

const Page1m42iio = lazy(() => import('./Page'));

const LazyPage1m42iio = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m42iio />
  </Suspense>
);

export { LazyPage1m42iio };
