import React, { lazy, Suspense } from 'react';

const Page1lwlw1j = lazy(() => import('./Page'));

const LazyPage1lwlw1j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwlw1j />
  </Suspense>
);

export { LazyPage1lwlw1j };
