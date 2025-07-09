import React, { lazy, Suspense } from 'react';

const Page1lurv79 = lazy(() => import('./Page'));

const LazyPage1lurv79 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lurv79 />
  </Suspense>
);

export { LazyPage1lurv79 };
