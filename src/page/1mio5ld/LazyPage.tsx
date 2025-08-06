import React, { lazy, Suspense } from 'react';

const Page1mio5ld = lazy(() => import('./Page'));

const LazyPage1mio5ld = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mio5ld />
  </Suspense>
);

export { LazyPage1mio5ld };
