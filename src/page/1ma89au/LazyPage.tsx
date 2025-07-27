import React, { lazy, Suspense } from 'react';

const Page1ma89au = lazy(() => import('./Page'));

const LazyPage1ma89au = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma89au />
  </Suspense>
);

export { LazyPage1ma89au };
