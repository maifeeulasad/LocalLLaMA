import React, { lazy, Suspense } from 'react';

const Page1miikci = lazy(() => import('./Page'));

const LazyPage1miikci = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miikci />
  </Suspense>
);

export { LazyPage1miikci };
