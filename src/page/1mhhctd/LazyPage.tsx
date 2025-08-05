import React, { lazy, Suspense } from 'react';

const Page1mhhctd = lazy(() => import('./Page'));

const LazyPage1mhhctd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhhctd />
  </Suspense>
);

export { LazyPage1mhhctd };
