import React, { lazy, Suspense } from 'react';

const Page1mg5xlb = lazy(() => import('./Page'));

const LazyPage1mg5xlb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg5xlb />
  </Suspense>
);

export { LazyPage1mg5xlb };
