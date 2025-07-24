import React, { lazy, Suspense } from 'react';

const Page1m7vlpn = lazy(() => import('./Page'));

const LazyPage1m7vlpn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7vlpn />
  </Suspense>
);

export { LazyPage1m7vlpn };
