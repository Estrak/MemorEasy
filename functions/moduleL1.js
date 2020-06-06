import React from 'react';

export default function ModuleL1(phrase, nomSite, separateur)
{
  nomSite = nomSite.toLowerCase();
  phrase=phrase.toLowerCase();
  let code='';
  let tailleSite=nomSite.length;
  for (let i=0; i<phrase.length; i++)
  {
    let lettre=phrase[i];
    let j=0;
    while (j<tailleSite)
    {
      if (lettre==nomSite[j]) //lettre en commun
      {
        code+=lettre;
        j=tailleSite;
      }
    }
  }
  if (code.length==0)
  { code+=nomSite[tailleSite-1]; }
  return code;
}
