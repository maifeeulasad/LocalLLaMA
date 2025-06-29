import React, { lazy, Suspense } from 'react';

const Page1ln5jqr = lazy(() => import('./Page'));

const LazyPage1ln5jqr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln5jqr />
  </Suspense>
);

export { LazyPage1ln5jqr };
