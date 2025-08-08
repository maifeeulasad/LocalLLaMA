import React, { lazy, Suspense } from 'react';

const Page1mkh8qe = lazy(() => import('./Page'));

const LazyPage1mkh8qe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkh8qe />
  </Suspense>
);

export { LazyPage1mkh8qe };
