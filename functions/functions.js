import React from 'react';

function calculMdp(phrase, nomSite, separateur, suiteModules)
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

function siteAleat()
{
  let nbLettres=hasard(5,10);
  let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let site='';
  for (let i=0; i<nbLettres; i++)
  { site+=alphabet[hasard(0,25)]; }
  return site;
}

function hasard(min,max)
{ return min+Math.floor(Math.random()*(max-min+1)); }
