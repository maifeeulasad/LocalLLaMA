import React, { lazy, Suspense } from 'react';

const Page1mcmbyt = lazy(() => import('./Page'));

const LazyPage1mcmbyt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcmbyt />
  </Suspense>
);

export { LazyPage1mcmbyt };
