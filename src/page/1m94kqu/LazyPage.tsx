import React, { lazy, Suspense } from 'react';

const Page1m94kqu = lazy(() => import('./Page'));

const LazyPage1m94kqu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m94kqu />
  </Suspense>
);

export { LazyPage1m94kqu };
