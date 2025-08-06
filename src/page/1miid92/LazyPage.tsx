import React, { lazy, Suspense } from 'react';

const Page1miid92 = lazy(() => import('./Page'));

const LazyPage1miid92 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miid92 />
  </Suspense>
);

export { LazyPage1miid92 };
