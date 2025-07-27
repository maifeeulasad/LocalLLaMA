import React, { lazy, Suspense } from 'react';

const Page1ma12o2 = lazy(() => import('./Page'));

const LazyPage1ma12o2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma12o2 />
  </Suspense>
);

export { LazyPage1ma12o2 };
