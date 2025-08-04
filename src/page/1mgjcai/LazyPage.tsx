import React, { lazy, Suspense } from 'react';

const Page1mgjcai = lazy(() => import('./Page'));

const LazyPage1mgjcai = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgjcai />
  </Suspense>
);

export { LazyPage1mgjcai };
