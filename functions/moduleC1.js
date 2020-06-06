import React from 'react';

export default function ModuleC1(phrase, nomSite, separateur)
{
  nomSite = nomSite.toLowerCase();
  let voyelles=['a','e','i','o','u','y'];
  let taille=nomSite.length;
  let code='';
  for (let i=0; i<taille; i++)
  {
    let lettre=nomSite[i];
    let j=0;
    while (j<6)
    {
      if (lettre==voyelles[j])
      {
        code+=j+1;
        j=6;
      }
      else
      { j++; }
    }
  }
  return code;
}
