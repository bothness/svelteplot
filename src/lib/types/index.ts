import type { ScaleBand, ScaleLinear, ScaleOrdinal } from 'd3-scale';
import type { Snippet } from 'svelte';
import type { MarkerShape } from '../marks/helpers/Marker.svelte';
import type { Writable } from 'svelte/store';
import type { Channels, ScaledChannelName } from './channel';
import type { DataRecord, DataRow, RawValue } from './data';
import type { BaseMarkProps } from './mark';

export type GenericMarkOptions = Record<string | symbol, any>;

export type CurveName =
    | 'basis'
    | 'basis-closed'
    | 'basis-open'
    | 'bundle'
    | 'bump-x'
    | 'bump-y'
    | 'cardinal'
    | 'cardinal-closed'
    | 'cardinal-open'
    | 'catmull-rom'
    | 'catmull-rom-closed'
    | 'catmull-rom-open'
    | 'linear'
    | 'linear-closed'
    | 'monotone-x'
    | 'monotone-y'
    | 'natural'
    | 'step'
    | 'step-after'
    | 'step-before';

export type MarkerOptions = {
    /**
     * the marker for the starting point of a line segment
     */
    markerStart?: boolean | MarkerShape | Snippet;
    /**
     * the marker for any intermediate point of a line segment
     */
    markerMid?: boolean | MarkerShape | Snippet;
    /**
     * the marker for the end point of a line segment
     */
    markerEnd?: boolean | MarkerShape | Snippet;
    /**
     * shorthand for setting the marker on all points
     */
    marker?: boolean | MarkerShape | Snippet;
};

export type ConstantAccessor<T, D = Record<string | symbol, RawValue>> =
    | T
    | ((d: D) => T)
    | null
    | undefined;

export type TransformArg<K> = Channels & BaseMarkProps<K> & { data: K[] };
export type MapArg<K> = Channels & { data: K[] };

export type TransformArgsRow = Partial<Channels> & { data: DataRow[] };
export type TransformArgsRecord = Partial<Channels> & { data: DataRecord[] };

export type AutoMarginStores = {
    autoMarginTop: Writable<Map<string, number>>;
    autoMarginLeft: Writable<Map<string, number>>;
    autoMarginRight: Writable<Map<string, number>>;
    autoMarginBottom: Writable<Map<string, number>>;
};

export type MapIndexObject = {
    mapIndex: (I: number[], S: RawValue[], T: RawValue[]) => void;
};

export type MapMethod =
    | 'cumsum'
    | 'rank'
    | 'quantile'
    | ((I: number[], S: number[]) => number[])
    | MapIndexObject;

export type MapOptions = Partial<Record<ScaledChannelName, MapMethod>>;

export type UsedScales = Record<ScaledChannelName, boolean>;

export * from './channel';
export * from './colorScheme';
export * from './data';
export * from './facet';
export * from './mark';
export * from './plot';
export * from './scale';
