import React, { lazy, Suspense } from 'react';

const Page1meyn4a = lazy(() => import('./Page'));

const LazyPage1meyn4a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meyn4a />
  </Suspense>
);

export { LazyPage1meyn4a };
