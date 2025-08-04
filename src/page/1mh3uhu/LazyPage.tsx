import React, { lazy, Suspense } from 'react';

const Page1mh3uhu = lazy(() => import('./Page'));

const LazyPage1mh3uhu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh3uhu />
  </Suspense>
);

export { LazyPage1mh3uhu };
