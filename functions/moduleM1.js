import React from 'react';

export default function ModuleM1(phrase, nomSite, separateur)
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
