import React from 'react';

export default function SiteAleat()
{
  let nbLettres=hasard(5,10);
  let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let site='';
  for (let i=0; i<nbLettres; i++)
  { site+=alphabet[hasard(0,25)]; }
  return site;
}
