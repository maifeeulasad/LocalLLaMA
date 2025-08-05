import React, { lazy, Suspense } from 'react';

const Page1mhok5i = lazy(() => import('./Page'));

const LazyPage1mhok5i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhok5i />
  </Suspense>
);

export { LazyPage1mhok5i };
