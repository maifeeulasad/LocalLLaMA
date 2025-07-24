import React, { lazy, Suspense } from 'react';

const Page1m7brg9 = lazy(() => import('./Page'));

const LazyPage1m7brg9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7brg9 />
  </Suspense>
);

export { LazyPage1m7brg9 };
