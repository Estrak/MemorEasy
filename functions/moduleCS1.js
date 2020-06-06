import React from 'react';

export default function ModuleCS1(phrase, nomSite, separateur)
{
  let lettre=phrase[0].toLowerCase();
  let plats=['a','z','e','r','u','o','s','m','w','x','c','v','n'];
  let hauts=['d','t','f','h','k','l','i','b'];
  let bas=['p','j','q','g','y'];
  if (plats.includes(lettre))
  { let code='-'; }
  else if (hauts.includes(lettre))
  { let code='\''; }
  else if (bas.includes(lettre))
  { let code=','; }
  return code;
}
