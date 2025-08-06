import React, { lazy, Suspense } from 'react';

const Page1mio3pe = lazy(() => import('./Page'));

const LazyPage1mio3pe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mio3pe />
  </Suspense>
);

export { LazyPage1mio3pe };
