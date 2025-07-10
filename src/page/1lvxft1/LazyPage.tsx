import React, { lazy, Suspense } from 'react';

const Page1lvxft1 = lazy(() => import('./Page'));

const LazyPage1lvxft1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvxft1 />
  </Suspense>
);

export { LazyPage1lvxft1 };
