import React, { lazy, Suspense } from 'react';

const Page1mbdn26 = lazy(() => import('./Page'));

const LazyPage1mbdn26 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbdn26 />
  </Suspense>
);

export { LazyPage1mbdn26 };
