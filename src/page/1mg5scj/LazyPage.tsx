import React, { lazy, Suspense } from 'react';

const Page1mg5scj = lazy(() => import('./Page'));

const LazyPage1mg5scj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg5scj />
  </Suspense>
);

export { LazyPage1mg5scj };
