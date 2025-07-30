import React, { lazy, Suspense } from 'react';

const Page1mcjaau = lazy(() => import('./Page'));

const LazyPage1mcjaau = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcjaau />
  </Suspense>
);

export { LazyPage1mcjaau };
