import React from 'react';

export default function CalculMdp(phrase, nomSite, separateur, suiteModules)
{
  nomSite=nomSite.toLowerCase();
  phrase=phrase.toLowerCase();
  let mdp='';
  for (let i=0; i<suiteModules.length; i++)
  {
    mdp+=suiteModules[i](phrase, nomSite, separateur);
  }
  return mdp;
}
