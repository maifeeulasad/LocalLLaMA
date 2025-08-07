import React, { lazy, Suspense } from 'react';

const Page1mjo88h = lazy(() => import('./Page'));

const LazyPage1mjo88h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjo88h />
  </Suspense>
);

export { LazyPage1mjo88h };
