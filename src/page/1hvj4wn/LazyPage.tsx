import React, { lazy, Suspense } from 'react';

const Page1hvj4wn = lazy(() => import('./Page'));

const LazyPage1hvj4wn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1hvj4wn />
  </Suspense>
);

export { LazyPage1hvj4wn };
