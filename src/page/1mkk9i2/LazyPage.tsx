import React, { lazy, Suspense } from 'react';

const Page1mkk9i2 = lazy(() => import('./Page'));

const LazyPage1mkk9i2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkk9i2 />
  </Suspense>
);

export { LazyPage1mkk9i2 };
