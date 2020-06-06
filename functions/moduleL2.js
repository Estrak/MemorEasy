import React from 'react';

export default function ModuleL2(phrase, nomSite, separateur)
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
