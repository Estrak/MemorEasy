import React from 'react';

export function CalculMdp(phrase, nomSite, separateur, suiteModules)
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

export function calculMdp(phrase, nomSite, separateur, suiteModules)
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

export function siteAleat()
{
  let nbLettres=hasard(5,10);
  let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let site='';
  for (let i=0; i<nbLettres; i++)
  { site+=alphabet[hasard(0,25)]; }
  return site;
}



export function hasard(min,max)
{ return min+Math.floor(Math.random()*(max-min+1)); }

export function Hasard(min,max)
{ return min+Math.floor(Math.random()*(max-min+1)); }

export function ModuleC1(phrase, nomSite, separateur)
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

export function ModuleC2(phrase, nomSite, separateur)
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

export function ModuleC3(phrase, nomSite, separateur)
{ return nomSite.length; }

export function ModuleCS1(phrase, nomSite, separateur)
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

export function ModuleL1(phrase, nomSite, separateur)
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

export function ModuleL2(phrase, nomSite, separateur)
{
  phrase=phrase.toLowerCase();
  let taillePhrase=phrase.length;
  let motNum=1; //numéro du mot donc numéro de la lettre à récupérer
  let indDeb=0; //indice du début du mot
  let ind=1; //indice depuis le début du mot
  let code='';
  for (let i=0; i<taillePhrase; i++)
  {
    if (phrase[i]!=' ' && ind==motNum)
    {
      code+=phrase[i];
      ind++;
    }
    else if (phrase[i]!=' ')
    { ind++; }
    else if (phrase[i]==' ' && code.length<motNum) //taille du mot ind-1
    {
      let mod=motNum%(ind-1); //numéro de la lettre à récupérer
      code+=phrase[indDeb+mod-1];
      indDeb=i+1;
      ind=1;
      motNum++;
    }
    else //(phrase[i]==' ' && code.length==motNum
    {
      indDeb=i+1;
      ind=1;
      motNum++;
    }
  }
  if (code.length<motNum)
  {
    let mod=motNum%(ind-1); //numéro de la lettre à récupérer
    code+=phrase[indDeb+mod-1];
  }
  return code;
}

export function ModuleM1(phrase, nomSite, separateur)
{
  nomSite = nomSite.toLowerCase();
  phrase=phrase.toLowerCase();
  let code='';
  let tailleSite=nomSite.length;
  let lettreMot=0; //nb de lettre en commun par mot
  for (let i=0; i<phrase.length; i++)
  {
    let lettre=phrase[i];
    let j=0;
    while (j<tailleSite)
    {
      if (lettre==nomSite[j]) //lettre en commun
      {
        code+=lettre;
        lettreMot+=1;
        j=tailleSite;
      }
      else
      {
        if (lettre==' ') //in est entre 2 mots
        {
          if (lettreMot==0)//il n'y a pas eu de lettre en commun dans le mot
          {
            code+=nomSite[tailleSite-1]+separateur;
            j=tailleSite;
          }
          else //il y a eu des lettres en commun
          {
            code+=separateur;
            lettreMot=0;
            j=tailleSite;
          }
        }
        else
        { j++; } //pas de lettre en commun
      }
    }
  }
  if (code[-1]==separateur) //si le dernier mot n'avait pas de lettre en commun
  { code+=nomSite[tailleSite-1]; }
  return code;
}

export function SiteAleat()
{
  let nbLettres=hasard(5,10);
  let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let site='';
  for (let i=0; i<nbLettres; i++)
  { site+=alphabet[hasard(0,25)]; }
  return site;
}
