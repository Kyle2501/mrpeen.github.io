import React from 'react';

import './style.css';

const Portrait = ({skintone, blush, condom}) => (
  <div className="Portrait">
    <svg className="MrPeen" id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 627.5 790.5'>
      <g id='Ebene_2'>
        <g id='Mr_Peen' fill={skintone.fill} stroke={skintone.stroke} strokeWidth='8' strokeLinecap='round'
        strokeLinejoin='round' strokeMiterlimit='10'>
          <path d='M538.569,758.312c-13.115,20.719-74.588,44.193-98.062,2.755c-16.575-91.163,89.091-109.81,102.89-73.199 C551.464,715.865,549.854,739.347,538.569,758.312z' />
          <path d='M226.398,765.189c-45.582,37.979-154.376,21.278-109.105-55.257C149.055,670.566,226.398,686.458,226.398,765.189z' />
          <path d='M558.957,617.029c-0.258,8.317-0.95,16.616-2.072,24.862c-1.814,15.987-6.377,31.542-13.488,45.976 c-13.799-36.61-119.465-17.964-102.89,73.199c-35.719,1.637-73.966-3.708-113.954-13.819 c-32.296,10.972-66.058,17.027-100.155,17.964c0-78.732-77.343-94.623-109.105-55.258c-7.266-11.894-13.431-24.425-18.419-37.439 c-3.253-8.439-5.972-17.076-8.143-25.856c-5.334-20.81-7.1-42.373-5.221-63.772l17.984-156.221l0.912-1.72 c63.441,10.732,160.758-36.092,191.235-105.19c31.762,65.43,155.081,96.798,223.267,72.516l0.477,0.643 C544.122,479,560.801,557.068,558.957,617.029z' />
          <path d='M518.907,392.354c-68.186,24.179-191.505-7.189-223.267-72.516c-30.478,69.098-127.794,116.026-191.235,105.19 c-41.562-7.128-68.6-38.89-52.729-105.293C94.336,148.782,153.198,15.539,269.224,15.166 c105.667-41.438,236.195,82.876,294.208,304.568C570.663,357.566,550.814,381.062,518.907,392.354z' />
          <path d='M231.992,487.784c3.321,4.954,5.669,10.495,6.92,16.327c5.926,27.618-13.861,55.257-44.172,61.763 c-30.312,6.506-59.712-10.608-65.638-38.227c-1.252-5.826-1.386-11.838-0.394-17.714' />
          <path d='M498.229,503.199c-0.233,5.956-1.598,11.812-4.02,17.259c-11.478,25.795-43.737,36.486-72.081,23.868 c-28.343-12.617-41.997-43.737-30.519-69.532c2.43-5.432,5.867-10.354,10.132-14.503' />
        </g>
      </g>
      <path fill='none' stroke='#000' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' d='M291.518,252.916c0,0.518,0.145,1.057,0.166,1.575c0.995,13.695-11.499,25.774-27.887,26.935 c-16.389,1.16-30.478-8.992-31.452-22.688c0-0.518,0-1.057,0-1.575' />
      <path fill='none' stroke='#000' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' d='M291.58,252.895c0.995,13.695,15.063,23.868,31.452,22.688c16.389-1.181,28.882-13.26,27.888-26.935' />
      <ellipse fill={blush.fill} cx='142.59' cy='248.626' rx='44.297' ry='15.291' />
      <ellipse fill={blush.fill} cx='442.89' cy='229.461' rx='44.297' ry='15.291' />
      <circle cx='145.263' cy='203.542' r='17.611' />
      <circle fill='#FFF' cx='149.717' cy='194.385' r='3.502' />
      <circle fill='#FFF' cx='155.498' cy='200.165' r='2.3' />
      <circle cx='442.89' cy='185.931' r='17.611' />
      <circle fill='#FFF' cx='447.323' cy='176.773' r='3.501' />
      <circle fill='#FFF' cx='453.125' cy='182.554' r='2.3' />
    </svg>

    {condom && 
      <svg className="Condom" id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 -111.5 627.5 903.5'>
        <g id='Ebene_2' display='none'>
          <g id='Condom' fill='#FFC9EF' stroke='#FFABE6' strokeWidth='8' strokeLinecap='round'
          strokeLinejoin='round' strokeMiterlimit='10'>
            <path d='M538.569,758.312c-13.115,20.719-74.588,44.193-98.062,2.755c-16.575-91.163,89.091-109.81,102.89-73.199 C551.464,715.865,549.854,739.347,538.569,758.312z' />
            <path d='M226.398,765.189c-45.582,37.979-154.376,21.278-109.105-55.257C149.055,670.566,226.398,686.458,226.398,765.189z' />
            <path d='M558.957,617.029c-0.258,8.317-0.95,16.616-2.072,24.862c-1.814,15.987-6.377,31.542-13.488,45.976 c-13.799-36.61-119.465-17.964-102.89,73.199c-35.719,1.637-73.966-3.708-113.954-13.819 c-32.296,10.972-66.058,17.027-100.155,17.964c0-78.732-77.343-94.623-109.105-55.258c-7.266-11.894-13.431-24.425-18.419-37.439 c-3.253-8.439-5.972-17.076-8.143-25.856c-5.334-20.81-7.1-42.373-5.221-63.772l17.984-156.221l0.912-1.72 c63.441,10.732,160.758-36.092,191.235-105.19c31.762,65.43,155.081,96.798,223.267,72.516l0.477,0.643 C544.122,479,560.801,557.068,558.957,617.029z' />
            <path d='M518.907,392.354c-68.186,24.179-191.505-7.189-223.267-72.516c-30.478,69.098-127.794,116.026-191.235,105.19 c-41.562-7.128-68.6-38.89-52.729-105.293C94.336,148.782,153.198,15.539,269.224,15.166 c105.667-41.438,236.195,82.876,294.208,304.568C570.663,357.566,550.814,381.062,518.907,392.354z' />
            <path d='M231.992,487.784c3.321,4.954,5.669,10.495,6.92,16.327c5.926,27.618-13.861,55.257-44.172,61.763 c-30.312,6.506-59.712-10.608-65.638-38.227c-1.252-5.826-1.386-11.838-0.394-17.714' />
            <path d='M498.229,503.199c-0.233,5.956-1.598,11.812-4.02,17.259c-11.478,25.795-43.737,36.486-72.081,23.868 c-28.343-12.617-41.997-43.737-30.519-69.532c2.43-5.432,5.867-10.354,10.132-14.503' />
          </g>
        </g>
          <path opacity='.4' fill={condom.fill} d='M577.324,401.604v196.102c-8.852,2.27-18.957,4.516-30.157,6.725 c-54.983,10.822-136.683,20.51-228.13,26.08c-87.09,5.311-165.865,5.809-221.426,2.348c-26.875-1.672-48.339-4.297-62.702-7.74  V401.604c0-14.469,0.478-28.744,1.433-42.828c8.534-127.314,54.646-237.441,121.127-304.161l0,0  c21.643-21.047,31.271-59.5-11.498-68.59l0,0h-0.199c-0.895-0.239-1.81-0.478-2.765-0.676l0,0  c-22.577-6.32-35.756-29.746-29.436-52.323c5.128-18.317,21.813-30.987,40.835-31.007c0.497,0,1.014,0,1.512,0l0,0  c44.162-1.353,87.667,75.891,169.088,85.817C456.715,1.759,562.584,159.31,575.952,358.854L577.324,401.604z' />
          <path opacity='.6' fill={condom.fill} d='M612.992,601.844c0.518,8.455-24.926,17.904-67.635,26.477 c-55.044,11.16-138.633,21.246-232.606,26.855c-81.182,4.953-153.552,5.352-207.381,2.408c-56.894-3.084-93.078-9.947-97.057-19.018 c-3.979-9.947-0.637-21.525,21.882-14.74c1.432,0.424,2.964,0.82,4.595,1.193c14.363,3.441,35.807,5.967,62.702,7.738 c55.56,3.461,134.335,2.963,221.426-2.348c91.507-5.57,173.066-15.258,228.13-26.08c11.199-2.207,21.305-4.455,30.157-6.723 c7.6-1.99,14.283-3.979,19.893-5.969C609.153,588.654,612.754,598.023,612.992,601.844z' />
          <path fill='none' stroke={condom.fill} strokeWidth='3' strokeMiterlimit='10' d='M577.324,401.604v196.102 c-8.852,2.27-18.957,4.516-30.157,6.725c-54.983,10.822-136.683,20.51-228.13,26.08c-87.09,5.311-165.865,5.809-221.426,2.348 c-26.875-1.672-48.339-4.297-62.702-7.74V401.604c0-14.469,0.478-28.744,1.433-42.828c8.534-127.314,54.646-237.441,121.127-304.161 l0,0c21.643-21.047,31.271-59.5-11.498-68.59l0,0h-0.199c-0.895-0.239-1.81-0.478-2.765-0.676l0,0  c-22.577-6.32-35.756-29.746-29.436-52.323c5.128-18.317,21.813-30.987,40.835-31.007c0.497,0,1.014,0,1.512,0l0,0  c44.162-1.353,87.667,75.891,169.088,85.817C456.715,1.759,562.584,159.31,575.952,358.854L577.324,401.604z' />
          <path fill='none' stroke={condom.fill} strokeWidth='3' strokeMiterlimit='10' d='M612.992,601.844 c0.518,8.455-24.926,17.904-67.635,26.477c-55.044,11.16-138.633,21.246-232.606,26.855c-81.182,4.953-153.552,5.352-207.381,2.408  c-56.894-3.084-93.078-9.947-97.057-19.018c-3.979-9.947-0.637-21.525,21.882-14.74c1.432,0.424,2.964,0.82,4.595,1.193 c14.363,3.441,35.807,5.967,62.702,7.738c55.56,3.461,134.335,2.963,221.426-2.348c91.507-5.57,173.066-15.258,228.13-26.08 c11.199-2.207,21.305-4.455,30.157-6.723c7.6-1.99,14.283-3.979,19.893-5.969C609.153,588.654,612.754,598.023,612.992,601.844z' />
      </svg>}
  </div>
);

export default Portrait;