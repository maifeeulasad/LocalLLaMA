import React, { lazy, Suspense } from 'react';

const Page1me8m73 = lazy(() => import('./Page'));

const LazyPage1me8m73 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me8m73 />
  </Suspense>
);

export { LazyPage1me8m73 };
