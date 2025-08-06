import React, { lazy, Suspense } from 'react';

const Page1miuz1j = lazy(() => import('./Page'));

const LazyPage1miuz1j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miuz1j />
  </Suspense>
);

export { LazyPage1miuz1j };
