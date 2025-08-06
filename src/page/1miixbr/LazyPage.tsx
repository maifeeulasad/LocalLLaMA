import React, { lazy, Suspense } from 'react';

const Page1miixbr = lazy(() => import('./Page'));

const LazyPage1miixbr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miixbr />
  </Suspense>
);

export { LazyPage1miixbr };
