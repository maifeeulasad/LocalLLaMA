import React, { lazy, Suspense } from 'react';

const Page1ma88wd = lazy(() => import('./Page'));

const LazyPage1ma88wd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma88wd />
  </Suspense>
);

export { LazyPage1ma88wd };
