import React, { lazy, Suspense } from 'react';

const Page1lvovpb = lazy(() => import('./Page'));

const LazyPage1lvovpb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvovpb />
  </Suspense>
);

export { LazyPage1lvovpb };
