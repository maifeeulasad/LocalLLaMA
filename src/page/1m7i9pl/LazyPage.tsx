import React, { lazy, Suspense } from 'react';

const Page1m7i9pl = lazy(() => import('./Page'));

const LazyPage1m7i9pl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7i9pl />
  </Suspense>
);

export { LazyPage1m7i9pl };
