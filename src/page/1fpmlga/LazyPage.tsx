import React, { lazy, Suspense } from 'react';

const Page1fpmlga = lazy(() => import('./Page'));

const LazyPage1fpmlga = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1fpmlga />
  </Suspense>
);

export { LazyPage1fpmlga };
