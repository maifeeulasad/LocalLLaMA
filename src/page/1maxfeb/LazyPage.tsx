import React, { lazy, Suspense } from 'react';

const Page1maxfeb = lazy(() => import('./Page'));

const LazyPage1maxfeb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maxfeb />
  </Suspense>
);

export { LazyPage1maxfeb };
