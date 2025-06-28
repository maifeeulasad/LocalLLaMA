import React, { lazy, Suspense } from 'react';

const Page1j0n56h = lazy(() => import('./Page'));

const LazyPage1j0n56h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1j0n56h />
  </Suspense>
);

export { LazyPage1j0n56h };
