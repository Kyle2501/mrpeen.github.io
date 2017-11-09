import React from 'react';
import FileSaver from 'file-saver';
import domtoimage from 'dom-to-image';
import html2canvas from 'html2canvas';

import withWindowResize from '../../containers/withWindowResize';
import './style.css';

const isFF = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const onExport = () => {
  if (isFF) {
    domtoimage.toBlob(document.getElementById('Photo'))
      .then(blob => {
        FileSaver.saveAs(blob, 'mr-peen.png');
      });
  } else {
    html2canvas(document.getElementById('Photo'), {
      onrendered: (canvas) => {
        canvas.toBlob(blob => FileSaver.saveAs(blob, 'mr-peen.png'));
      }
    });
  }
}

const UserActions = ({onClickReset, windowWidth}) => (
  <div className="UserActions">
    <button
      type="button"
      className="UserActions--button"
      onClick={onExport}>
      {windowWidth >= 750 && 'Download '}
      <i class="fa fa-download" aria-hidden="true"></i>
    </button>
    <button
      type="button"
      className="UserActions--button"
      onClick={onClickReset}>
      {windowWidth >= 750 && 'Reset '}
      <i class="fa fa-trash-o" aria-hidden="true"></i>
    </button>
  </div>
);

export default withWindowResize(UserActions);