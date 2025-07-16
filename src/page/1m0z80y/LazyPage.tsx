import React, { lazy, Suspense } from 'react';

const Page1m0z80y = lazy(() => import('./Page'));

const LazyPage1m0z80y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0z80y />
  </Suspense>
);

export { LazyPage1m0z80y };
