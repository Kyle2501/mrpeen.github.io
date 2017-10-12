import { connect } from 'react-redux';

import {
  selectSkintone,
  selectBlush,
  selectCondom,
  setBackground,
  addToy,
  removeToy,
  clearAndAddToys,
  removeAllToys
} from '../../actions';
import Panel from './component';

const mapStateToProps = ({selectables, peen}) => {
  const selected = selectables.find(item => item.isSelected);
  return {
    selected: selected.name,
    toClear: selected.toClear,
    items: selected.items,
    active: peen[selected.name]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickColor: (id, selected) => {
      switch(selected) {
        case 'blush':
          return dispatch(selectBlush(id));
        case 'skintone':
          return dispatch(selectSkintone(id));
        case 'condom':
          return dispatch(selectCondom(id));
        case 'background':
          return dispatch(setBackground(id));
        default:
          return;
      }
    },
    onClickToy: (id, active, clears) => {
      if (active.indexOf(id) >= 0) {
        return dispatch(removeToy(id));
      } else {
        if (clears.length) return dispatch(clearAndAddToys(id, clears));
        return dispatch(addToy(id));
      }
    },
    onClickBackground: (id) => {
      return dispatch(setBackground(id));
    },
    onClickRemoveToys: () => {
      dispatch(removeAllToys());
    }
  }
}

const PanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default PanelContainer;