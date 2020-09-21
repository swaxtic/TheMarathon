import 'intl';
import '../../node_modules/intl/locale-data/jsonp/id-ID';
export const {format: formatPrice} = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});