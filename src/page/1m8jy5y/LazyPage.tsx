import React, { lazy, Suspense } from 'react';

const Page1m8jy5y = lazy(() => import('./Page'));

const LazyPage1m8jy5y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8jy5y />
  </Suspense>
);

export { LazyPage1m8jy5y };
