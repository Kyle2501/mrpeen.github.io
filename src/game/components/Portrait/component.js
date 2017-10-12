import React from 'react';

import MrPeen from '../Peen';
import Condom from '../Condom';
import {
  AnkleCuffs,
  Ballgag,
  Collar,
  EyeMask,
  Handcuffs,
  HeartCollar,
  Karada,
  LatexMask,
  RopeCuffs,
  Wand
} from '../toys';
import './style.css';

const Portrait = ({condom, toys}) => (
  <div
    id="Portrait"
    className="Portrait">

    <MrPeen />

    {condom && <Condom />}

    {toys.handcuffs && <Handcuffs />}

    {toys.ropeCuffs && <RopeCuffs />}

    {toys.ballgag && <Ballgag />}

    {toys.eyeMask && <EyeMask />}

    {toys.collar && <Collar />}

    {toys.collarRed && <Collar fill="#e51b04" stroke="#b71603" />}

    {toys.wand && <Wand />}

    {toys.latexMask && <LatexMask />}

    {toys.latexMaskPink && <LatexMask fill="#f4abf3" stroke="#ef83ee" />}

    {toys.heartCollar && <HeartCollar />}

    {toys.heartCollarPink &&
      <HeartCollar
        fill="#FFC9EF"
        stroke="#FFABE6"
        metalFill="#FFD700"
        metalStroke="#D4AF37" />}

    {toys.hishiKarada && <Karada />}

    {toys.ankleCuffs && <AnkleCuffs />}

  </div>
);

export default Portrait;