import React, { lazy, Suspense } from 'react';

const Page1mc6dfx = lazy(() => import('./Page'));

const LazyPage1mc6dfx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc6dfx />
  </Suspense>
);

export { LazyPage1mc6dfx };
