import React, { lazy, Suspense } from 'react';

const Page1mesvnt = lazy(() => import('./Page'));

const LazyPage1mesvnt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mesvnt />
  </Suspense>
);

export { LazyPage1mesvnt };
