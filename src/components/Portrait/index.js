import { connect } from 'react-redux';

import Portrait from './component';

const mapStateToProps = (state) => {
  const {selectables, peen} = state;
  const {skintone, blush, condom} = peen;
  const objSelectables = selectables.reduce((acc, item, index) => {
    acc[item.name] = item.items;
    return acc;
  }, {})

  return {
    skintone: objSelectables.skintone.find(({id}) => (id === skintone)),
    blush: objSelectables.blush.find(({id}) => (id === blush)),
    condom: objSelectables.condom.find(({id}) => (id === condom)) || null
  }
}

const PortraitContainer = connect(mapStateToProps)(Portrait);

export default PortraitContainer;