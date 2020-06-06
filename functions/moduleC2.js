import React from 'react';

export default function ModuleC2(phrase, nomSite, separateur)
{
  let code=0;
  for (let i=0; i<phrase.length; i++)
  {
    if (phrase[i]==' ')
    { code++; }
  }
  code++;
  return code;
}
