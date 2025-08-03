import React, { lazy, Suspense } from 'react';

const Page1mfpn4a = lazy(() => import('./Page'));

const LazyPage1mfpn4a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfpn4a />
  </Suspense>
);

export { LazyPage1mfpn4a };
