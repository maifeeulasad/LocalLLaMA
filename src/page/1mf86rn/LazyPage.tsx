import React, { lazy, Suspense } from 'react';

const Page1mf86rn = lazy(() => import('./Page'));

const LazyPage1mf86rn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf86rn />
  </Suspense>
);

export { LazyPage1mf86rn };
