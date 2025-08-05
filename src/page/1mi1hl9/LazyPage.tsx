import React, { lazy, Suspense } from 'react';

const Page1mi1hl9 = lazy(() => import('./Page'));

const LazyPage1mi1hl9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi1hl9 />
  </Suspense>
);

export { LazyPage1mi1hl9 };
