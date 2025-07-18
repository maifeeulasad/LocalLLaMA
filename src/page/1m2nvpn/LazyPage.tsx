import React, { lazy, Suspense } from 'react';

const Page1m2nvpn = lazy(() => import('./Page'));

const LazyPage1m2nvpn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2nvpn />
  </Suspense>
);

export { LazyPage1m2nvpn };
