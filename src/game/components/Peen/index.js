import { connect } from 'react-redux';

import Peen from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;

  const objSelectables = selectables.reduce((acc, item, index) => {
    acc[item.name] = item.items;
    return acc;
  }, {})

  return {
    skintone: objSelectables.skintone.find(({id}) => peen.skintone === id),
    blush: objSelectables.makeUp.find(({id}) => peen.makeUp === id)
  }
}

const PeenContainer = connect(mapStateToProps)(Peen);

export default PeenContainer;