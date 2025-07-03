import React, { lazy, Suspense } from 'react';

const Page1lqa7cd = lazy(() => import('./Page'));

const LazyPage1lqa7cd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqa7cd />
  </Suspense>
);

export { LazyPage1lqa7cd };
