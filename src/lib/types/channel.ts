import type { ConstantAccessor, RawValue } from './index.js';

export type Channels = Record<
    string,
    ChannelAccessor | ConstantAccessor<string | number | boolean | symbol>
>;

export type ChannelAccessor<T = Record<string | symbol, RawValue>> =
    | ChannelValue<T>
    | {
          /** the channel value */
          value: ChannelValue<T>;
          /** you can bypass the scale by passing null */
          scale: boolean | null;
      };

export type ChannelValue<T = Record<string | symbol, RawValue>> =
    | RawValue
    | keyof T
    | ((d: T) => RawValue)
    | null
    | undefined;

export type ScaledChannelName =
    | 'fill'
    | 'fillOpacity'
    | 'opacity'
    | 'r'
    | 'length'
    | 'stroke'
    | 'strokeOpacity'
    | 'symbol'
    | 'fx'
    | 'fy'
    | 'x'
    | 'x1'
    | 'x2'
    | 'y'
    | 'y1'
    | 'y2';

export type ChannelName = ScaledChannelName | 'z' | 'sort' | 'filter' | 'interval';
