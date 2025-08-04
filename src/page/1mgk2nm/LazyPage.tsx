import React, { lazy, Suspense } from 'react';

const Page1mgk2nm = lazy(() => import('./Page'));

const LazyPage1mgk2nm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgk2nm />
  </Suspense>
);

export { LazyPage1mgk2nm };
