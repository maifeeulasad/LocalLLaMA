import React, { lazy, Suspense } from 'react';

const Page1mg0sbe = lazy(() => import('./Page'));

const LazyPage1mg0sbe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg0sbe />
  </Suspense>
);

export { LazyPage1mg0sbe };
