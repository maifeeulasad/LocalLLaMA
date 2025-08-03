import React, { lazy, Suspense } from 'react';

const Page1mgg3mh = lazy(() => import('./Page'));

const LazyPage1mgg3mh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgg3mh />
  </Suspense>
);

export { LazyPage1mgg3mh };
