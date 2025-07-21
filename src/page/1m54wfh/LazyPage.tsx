import React, { lazy, Suspense } from 'react';

const Page1m54wfh = lazy(() => import('./Page'));

const LazyPage1m54wfh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m54wfh />
  </Suspense>
);

export { LazyPage1m54wfh };
