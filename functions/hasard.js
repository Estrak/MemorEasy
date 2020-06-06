import React from 'react';

export default function Hasard(min,max)
{ return min+Math.floor(Math.random()*(max-min+1)); }
