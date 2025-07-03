import React, { lazy, Suspense } from 'react';

const Page1lpyumi = lazy(() => import('./Page'));

const LazyPage1lpyumi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpyumi />
  </Suspense>
);

export { LazyPage1lpyumi };
