import React, { lazy, Suspense } from 'react';

const Page1migl0k = lazy(() => import('./Page'));

const LazyPage1migl0k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1migl0k />
  </Suspense>
);

export { LazyPage1migl0k };
