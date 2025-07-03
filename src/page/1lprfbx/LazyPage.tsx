import React, { lazy, Suspense } from 'react';

const Page1lprfbx = lazy(() => import('./Page'));

const LazyPage1lprfbx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lprfbx />
  </Suspense>
);

export { LazyPage1lprfbx };
