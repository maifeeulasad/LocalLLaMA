import React, { lazy, Suspense } from 'react';

const Page18n3ar3 = lazy(() => import('./Page'));

const LazyPage18n3ar3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page18n3ar3 />
  </Suspense>
);

export { LazyPage18n3ar3 };
