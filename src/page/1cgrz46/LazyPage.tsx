import React, { lazy, Suspense } from 'react';

const Page1cgrz46 = lazy(() => import('./Page'));

const LazyPage1cgrz46 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1cgrz46 />
  </Suspense>
);

export { LazyPage1cgrz46 };
