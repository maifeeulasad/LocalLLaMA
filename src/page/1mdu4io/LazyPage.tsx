import React, { lazy, Suspense } from 'react';

const Page1mdu4io = lazy(() => import('./Page'));

const LazyPage1mdu4io = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdu4io />
  </Suspense>
);

export { LazyPage1mdu4io };
