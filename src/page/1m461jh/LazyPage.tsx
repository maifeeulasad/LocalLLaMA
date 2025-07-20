import React, { lazy, Suspense } from 'react';

const Page1m461jh = lazy(() => import('./Page'));

const LazyPage1m461jh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m461jh />
  </Suspense>
);

export { LazyPage1m461jh };
