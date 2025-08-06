import React, { lazy, Suspense } from 'react';

const Page1mizhx9 = lazy(() => import('./Page'));

const LazyPage1mizhx9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizhx9 />
  </Suspense>
);

export { LazyPage1mizhx9 };
