import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import Pile from '../src/index';

const { Mask } = Pile;

describe('<Mask />', () => {
  describe('<Mask />', () => {
    const wrapper = shallow(<Mask />);
  });

  [true, false].map((transparent) => {
    describe(`<Mask transparent="${transparent}" />`, () => {
      const label = 'ok';
      const href = 'https://es.xiaojukeji.com';
      const wrapper = shallow(<Mask transparent={transparent} />);

      it('transparent 时样式 didi_mask_transparent是否有添加并且不包含didi_mask', () => {
        if (transparent) {
          assert(wrapper.hasClass('didi_mask_transparent'));
          assert(!wrapper.hasClass('didi_mask'));
        }
      });

      it('!transparent  时样式 didi_mask_transparent是否无添加并且包含didi_mask', () => {
        if (!transparent) {
          assert(wrapper.hasClass('didi_mask'));
          assert(!wrapper.hasClass('didi_mask_transparent'));
        }
      });
    });
  });
});
