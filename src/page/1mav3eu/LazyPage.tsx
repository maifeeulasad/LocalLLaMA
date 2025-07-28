import React, { lazy, Suspense } from 'react';

const Page1mav3eu = lazy(() => import('./Page'));

const LazyPage1mav3eu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mav3eu />
  </Suspense>
);

export { LazyPage1mav3eu };
