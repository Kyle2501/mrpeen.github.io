import React from 'react';

import Peen from '../../Peen';
import Condom from '../../Condom';
import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';

const ExtrasPanel = ({items, active, onClick, onClickClear}) => (
  <div className="ExtrasPanel">
    {items.map(({id, fill, icon, clears, type, stroke}) => 
      <PanelItem key={id}>
        <PanelItemIcon
          key={id}
          icon={icon}
          onClick={() => onClick(id, active, clears)}>
          {type === 'condom' && <Condom color={fill} type='icon' />}
          {type === 'peen' && <Peen skintone={{fill: fill, stroke: stroke}} type='icon' blush="#ff81d2" />}
        </PanelItemIcon>
      </PanelItem>)}

      <PanelItem>
        <Circle
          isReset={true}
          onClick={onClickClear} />
      </PanelItem>
  </div>
);

export default ExtrasPanel;