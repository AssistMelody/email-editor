import { BlockManager } from 'easy-email-core';
import { BlockAttributeConfigurationManager } from 'easy-email-extensions';
import { CustomBlocksType } from './constants';
import {
  Panel as ProductRecommendationPanel,
  ProductRecommendation,
} from './ProductRecommendation';
import { Panel as ProductPopupPanel, ProductPopup }  from './ProductPopup'

console.log(ProductPopup);

BlockManager.registerBlocks({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendation,
  [CustomBlocksType.PRODUCT_POPUP]: ProductPopup,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendationPanel,
  [CustomBlocksType.PRODUCT_POPUP]: ProductPopupPanel,
});
