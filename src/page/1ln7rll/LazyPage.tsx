import React, { lazy, Suspense } from 'react';

const Page1ln7rll = lazy(() => import('./Page'));

const LazyPage1ln7rll = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln7rll />
  </Suspense>
);

export { LazyPage1ln7rll };
