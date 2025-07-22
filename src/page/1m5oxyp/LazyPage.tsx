import React, { lazy, Suspense } from 'react';

const Page1m5oxyp = lazy(() => import('./Page'));

const LazyPage1m5oxyp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5oxyp />
  </Suspense>
);

export { LazyPage1m5oxyp };
