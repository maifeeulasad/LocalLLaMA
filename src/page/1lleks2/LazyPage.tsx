import React, { lazy, Suspense } from 'react';

const Page1lleks2 = lazy(() => import('./Page'));

const LazyPage1lleks2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lleks2 />
  </Suspense>
);

export { LazyPage1lleks2 };
