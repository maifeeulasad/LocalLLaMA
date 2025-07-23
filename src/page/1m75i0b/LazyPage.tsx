import React, { lazy, Suspense } from 'react';

const Page1m75i0b = lazy(() => import('./Page'));

const LazyPage1m75i0b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m75i0b />
  </Suspense>
);

export { LazyPage1m75i0b };
