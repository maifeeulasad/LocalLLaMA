import React, { lazy, Suspense } from 'react';

const Page1luacs4 = lazy(() => import('./Page'));

const LazyPage1luacs4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luacs4 />
  </Suspense>
);

export { LazyPage1luacs4 };
