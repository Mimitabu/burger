import PropTypes from 'prop-types';
const { number, string } = PropTypes;

const reqProp = PropTypes.shape({
    _id: string.isRequired,
    calories: number.isRequired,
    carbohydrates: number.isRequired,
    fat: number.isRequired,
    image: string.isRequired,
    image_large: string.isRequired,
    image_mobile: string.isRequired,
    name: string.isRequired,
    price: number.isRequired,
    proteins: number.isRequired,
    type: string.isRequired,
    __v: number.isRequired,
  }).isRequired

export const data = PropTypes.arrayOf(reqProp).isRequired;