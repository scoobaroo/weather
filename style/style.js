import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'svg': {
    'height': [{ 'unit': 'px', 'value': 150 }]
  },
  'td': {
    'verticalAlign': 'middle !important',
    'textAlign': 'center !important'
  },
  'th': {
    'verticalAlign': 'middle !important',
    'textAlign': 'center !important'
  },
  'input-group': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'td:first-of-type': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'width': [{ 'unit': 'px', 'value': 220 }]
  },
  'td:first-of-type>div': {
    'height': [{ 'unit': 'px', 'value': 200 }],
    'width': [{ 'unit': 'px', 'value': 220 }]
  }
});
